import {APP_ID} from 'config'

const icon24 = '<?xml version="1.0" encoding="UTF-8"?>\n'
	+ '<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n'
	+ '    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->\n'
	+ '    <title>icon 24</title>\n'
	+ '    <desc>Created with Sketch.</desc>\n'
	+ '    <g id="icon-24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n'
	+ '        <g id="icon-48" transform="translate(1.000000, 2.000000)" fill="currentColor" fill-rule="nonzero">\n'
	+ '            <path d="M10,15 L12.8786797,15 C13.154822,15 13.3786797,14.7761424 13.3786797,14.5 C13.3786797,14.3673918 13.3260012,14.2402148 13.232233,14.1464466 L7.35355339,8.26776695 C6.37724266,7.29145622 6.37724266,5.70854378 7.35355339,4.73223305 C7.82239434,4.2633921 8.45827912,4 9.12132034,4 L13,4 L13,1.28305684 C13,0.73077209 13.4477153,0.283056839 14,0.283056839 C14.1840048,0.283056839 14.3644421,0.333825725 14.52145,0.429775006 L20.6037206,4.14671817 C21.0749752,4.43470705 21.2235413,5.05019547 20.9355525,5.52145001 C20.8528289,5.6568159 20.7390865,5.77055823 20.6037206,5.85328183 L14.52145,9.57022499 C14.0501955,9.85821388 13.4347071,9.70964771 13.1467182,9.23839317 C13.0507689,9.08138526 13,8.90094791 13,8.71694316 L13,6 L9.12132034,6 C8.9887121,6 8.86153514,6.05267842 8.76776695,6.14644661 C8.57250481,6.34170876 8.57250481,6.65829124 8.76776695,6.85355339 L14.6464466,12.732233 C15.1152876,13.201074 15.3786797,13.8369588 15.3786797,14.5 C15.3786797,15.8807119 14.2593915,17 12.8786797,17 L9.99996671,17 L6.20711855,20.7927219 C5.81657341,21.1832069 5.18342659,21.1832069 4.79288145,20.7927219 L0.707118552,16.707095 C0.316575989,16.316589 0.316565449,15.683424 0.70708324,15.2928932 C0.707087164,15.2928893 0.707091087,15.2928854 0.707106781,15.2928932 L4.79289322,11.2071068 C5.18341751,10.8165825 5.81658249,10.8165825 6.20710678,11.2071068 L10,15 Z M15,6.93388632 L18.1645413,5 L15,3.06611368 L15,6.93388632 Z" id="Combined-Shape"></path>\n'
	+ '        </g>\n'
	+ '    </g>\n'
	+ '</svg>'

const commands: any = {
	setIsInPreviewMode,
	createHotspot,
}



rtb.onReady(() => {
	const channel = new BroadcastChannel(APP_ID)
	channel.onmessage = function(e) {
		console.log('Received', e.data)

		if (e.data) {
			for (const key in e.data) {
				if (commands[key]) {
					commands[key](e.data[key])
				}
			}
		}
	}

	rtb.initialize({
		extensionPoints: {
			bottomBar: {
				title: 'Prototype',
				svgIcon: icon24,
				onClick: () => {
					rtb.board.ui.openLeftSidebar('sidebar.html')
				},
			},
		},
	}).then(async () => {
		rtb.addListener('ALL_WIDGETS_LOADED', async () => {
			console.log('ALL_WIDGETS_LOADED')

			const params = await rtb.board.__getParamsFromBoardUrl()
			if (params.runPrototyping) {
				setIsInPreviewMode({enable: true})
			}
		})
	})
})

async function createStartHotspot(): Promise<SDK.IShapeWidgetData> {
	return await rtb.board.selection.enterSelectWidgetsMode({allowMultiSelection: false}).then(async (res) => {
		var screen = res.selectedWidgets[0]
		var flagWidget = (await rtb.board.widgets.create<SDK.IShapeWidgetData>({
			type: 'SHAPE',
			y: screen.bounds.y,
			x: screen.bounds.left - 50 - screen.bounds.height * 0.2,
			width: 100,
			height: 100,
			style: {
				backgroundColor: '#f24726',
				backgroundOpacity: 0.25,
				borderOpacity: 1,
				borderStyle: 2,
				borderWidth: 0,
			},
			'metadata': {
				[APP_ID]: {
					hotspot: true,
					startHotspot: true,
				},
			},
		} as any))[0]

		await rtb.board.widgets.create({
			type: 'LINE',
			startWidgetId: flagWidget.id,
			endWidgetId: screen.id,
		} as any)

		return flagWidget
	})
}

async function zoomToWidget(w: SDK.IBaseWidget) {
	var v = {
		x: w.bounds.left,
		y: w.bounds.top,
		width: w.bounds.width,
		height: w.bounds.height,
	}
	var padding = {
		top: 60,
		left: 80,
		right: 80,
		bottom: 70,
	}
	rtb.board.viewport.__mask(v, padding)
	await rtb.board.viewport.setViewport(v, padding)
}

let isInPreviewMode = false

function getIsInPreviewMode() {
	return isInPreviewMode
}

function onCommentInPreviewMode() {
	rtb.board.ui.__selectDefaultTool()
}

function onExitFromPreviewMode() {
	setIsInPreviewMode({enable: false})
}

async function onCanvasClicked(e: any) {
	const widgets = await rtb.board.widgets.__getIntersectedObjects(e.data)
	const hotspot = widgets.filter(isHotspotWidget)[0]
	console.log('onCanvasClicked', widgets, hotspot)

	if (hotspot) {
		goToConnectionOfHotspotWidget(hotspot.id)
	} else {
		blinkHotspots()
	}
}

async function getHotspots() {
	const shapes = await rtb.board.widgets.get({type: 'shape'})
	return shapes.filter(isHotspotWidget)
}

async function blinkHotspots() {
	const hotspots = await getHotspots()
	const hotspotstoShow = hotspots.map(h => ({id: h.id, clientVisible: true}))
	rtb.board.widgets.update(hotspotstoShow)
	rtb.board.widgets.__blinkWidget(hotspotstoShow)
	setTimeout(() => {
		const hotspotsToHide = hotspots.map(h => ({id: h.id, clientVisible: false}))
		rtb.board.widgets.update(hotspotsToHide)
	}, 500)
}

async function showHotspots() {
	const hotspots = await getHotspots()
	const updatingHotspots = hotspots.map(h => ({
		id: h.id,
		clientVisible: true,
	}))
	rtb.board.widgets.update(updatingHotspots)
}

async function hideHotspots() {
	const hotspots = await getHotspots()
	const updatingHotspots = hotspots.map(h => ({
		id: h.id,
		clientVisible: false,
	}))
	rtb.board.widgets.update(updatingHotspots)
}

async function setIsInPreviewMode(args: {enable: boolean}) {
	if (args.enable) {
		const shapes = await rtb.board.widgets.get<SDK.IShapeWidgetData>({'type': 'SHAPE'})
		const hotspots = shapes.filter(isHotspotWidget)
		await rtb.board.widgets.bringForward(hotspots)
		const hotspotsIsValid = await checkAllHotspotsLinks(hotspots)

		if (hotspotsIsValid) {
			let startHotspot: SDK.IShapeWidgetData = shapes.filter(
				shape => shape.metadata[APP_ID] && shape.metadata[APP_ID].startHotspot)[0]
			if (!startHotspot) {
				rtb.showNotification('Please select start page')
				startHotspot = await createStartHotspot()
			}

			if (!startHotspot) {
				alert('Please set up start point')
				return
			}

			await goToConnectionOfHotspotWidget(startHotspot.id)

			await rtb.board.ui.__openBottomPanel()
			await rtb.board.ui.__hidePanels()
			await rtb.board.ui.closeLeftSidebar({})
			await rtb.board.selection.selectWidgets([])
			await hideAllLinks()
			await rtb.board.ui.__setToolbarMode('commentor')
			await hideHotspots()
			await rtb.board.__disableLeftClick()

			// todo BOARD_?
			rtb.addListener('COMMENT_CREATED', onCommentInPreviewMode)
			rtb.addListener('EXIT_PROTOTYPING', onExitFromPreviewMode)
			rtb.addListener('ESC_PRESSED', onExitFromPreviewMode)
			rtb.addListener('CANVAS_CLICKED', onCanvasClicked)

			isInPreviewMode = args.enable
		}
	} else {
		await rtb.board.viewport.__unmask()
		await rtb.board.ui.__resetConfig()
		await rtb.board.ui.__closeBottomPanel()
		await rtb.board.ui.__setToolbarMode('editor')
		await restoreAllLinks()
		await showHotspots()
		await rtb.board.__enableLeftClick()
		rtb.board.ui.openLeftSidebar('sidebar.html')

		rtb.removeListener('COMMENT_CREATED', onCommentInPreviewMode)
		rtb.removeListener('EXIT_PROTOTYPING', onExitFromPreviewMode)
		rtb.removeListener('ESC_PRESSED', onExitFromPreviewMode)
		rtb.removeListener('CANVAS_CLICKED', onCanvasClicked)

		isInPreviewMode = args.enable
	}
}

async function checkAllHotspotsLinks(hotspots: SDK.IShapeWidgetData[]) {
	const lines = await rtb.board.widgets.get<SDK.ILineWidgetData>({type: 'line'})
	let hotspotsWithoutLinks = hotspots.slice()
	let linkWithoutScreen

	lines.forEach(line => {
		//for startWidgetId
		const linkedHotspot1 = hotspots.find(h => h.id === line.startWidgetId)
		if (linkedHotspot1) {
			hotspotsWithoutLinks = hotspotsWithoutLinks.filter(h => h.id !== linkedHotspot1.id)
		}

		//for endWidgetId
		const linkedHotspot2 = hotspots.find(h => h.id === line.endWidgetId)
		if (linkedHotspot2) {
			hotspotsWithoutLinks = hotspotsWithoutLinks.filter(h => h.id === linkedHotspot2.id)
		}

		if ((linkedHotspot1 || linkedHotspot2) && (!line.startWidgetId || !line.endWidgetId)) {
			linkWithoutScreen = line
		}
	})

	if (linkWithoutScreen) {
		rtb.showErrorNotification('Please attach link to some screen')
		rtb.board.viewport.zoomToObject(linkWithoutScreen)
		return Promise.resolve(false)
	}

	if (hotspotsWithoutLinks.length > 0) {
		rtb.showErrorNotification('Please add link to hotspot')
		rtb.board.viewport.zoomToObject(hotspotsWithoutLinks[0])
		return Promise.resolve(false)
	}

	return Promise.resolve(true)
}

async function createHotspot() {
	const viewport = await rtb.board.viewport.getViewport()
	const width = 152
	const height = 66

	console.log(viewport)

	await rtb.board.widgets.create({
		metadata: {
			[APP_ID]: {
				hotspot: true,
			},
		},
		type: 'SHAPE',
		x: (viewport.x + viewport.width / 2 - width / 2),
		y: (viewport.y + viewport.height / 2 - height / 2),
		style: {
			shapeType: 3,
			backgroundColor: '#8fd14f',
			backgroundOpacity: 0.5,
			borderColor: 'transparent',
			borderWidth: 2,
			borderOpacity: 1,
			borderStyle: 2,
			fontFamily: 10,
			textColor: '#1a1a1a',
			textAlign: 'c',
			textAlignVertical: 'm',
			fontSize: 17,
			bold: 0,
			italic: 0,
			underline: 0,
			strike: 0,
			highlighting: '',
		},
		createdUserId: '',
		lastModifiedUserId: '',
		width: width,
		height: height,
		rotation: 0,
		text: '',
	} as any)
}

function isHotspotWidget(widget: SDK.IBaseWidget) {
	return widget.metadata[APP_ID] && widget.metadata[APP_ID].hotspot
}

async function goToConnectionOfHotspotWidget(widgetId: string) {
	const lines = await rtb.board.widgets.get({'type': 'LINE', 'startWidgetId': widgetId})
	if (lines.length > 0) {
		if (lines.length > 1) {
			alert('Too match links')
		} else {
			const line = (lines[0] as SDK.ILineWidgetData)
			if (!line.endWidgetId) {
				alert('Can not find the end of connection')
			} else {
				const sourceWidget = (await rtb.board.widgets.get({'id': line.startWidgetId}))[0]
				if (isHotspotWidget(sourceWidget)) {
					await rtb.board.selection.selectWidgets([])
					const targetWidget = (await rtb.board.widgets.get({'id': line.endWidgetId}))[0]
					await zoomToWidget(targetWidget)
				}
			}
		}
	} else {
		alert('Hotspot has no lines')
	}
}

async function hideAllLinks() {
	const lines = await rtb.board.widgets.get({'type': 'LINE'})
	const newLines = lines
		.map(({id}) => ({
			id,
			clientVisible: false,
		}))

	await rtb.board.widgets.update(newLines)
}

async function restoreAllLinks(): Promise<any> {
	const lines = await rtb.board.widgets.get({'type': 'LINE'})
	const newLines = lines
		.map(({id}) => ({
			id,
			clientVisible: true,
		}))

	await rtb.board.widgets.update(newLines)
}
