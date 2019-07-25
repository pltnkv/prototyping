import * as copy from 'copy-to-clipboard'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {APP_ID} from 'config'

require('./styles.less')
require('./rtb.uikit.1.0.less')

const channel = new BroadcastChannel(APP_ID)
class Root extends React.Component {
	ref = React.createRef<HTMLDivElement>()
	state = {
		isAccessByLinkEnabled: false,
		hasStartHotspot: false,
		loading: true,
	}

	async createHotspot() {
		console.log('createHotspot')
		channel.postMessage({ createHotspot: { } });
	}

	async onPlay() {
		channel.postMessage({ setIsInPreviewMode: { enable: true } });
	}

	async onCopy() {
		const url = await rtb.board.__getBoardUrlWithParams({runPrototyping: true})
		copy(url)

		rtb.showNotification('Link copied')
	}

	async componentWillMount(): Promise<void> {
		const isAccessByLinkEnabled = (await rtb.board.info.__getBoardAccessByLink()) === 'COMMENT'
		const shapes = await rtb.board.widgets.get({ 'type': 'SHAPE' })
		const hasStartHotspot = !!shapes.filter(
			shape => shape.metadata[APP_ID] && shape.metadata[APP_ID].startHotspot)[0]

		this.setState({
			isAccessByLinkEnabled,
			hasStartHotspot,
			loading: false
		})
	}

	componentDidMount(): void {
		rtb.helpers.initScrollableContainerWithDraggableImages(this.ref.current!, {draggableImageSelector: '.draggable-item'})
	}

	render() {
		const {
			isAccessByLinkEnabled,
			hasStartHotspot,
			loading,
		} = this.state

		return (
			<div className="container" ref={this.ref}>
				<div className="header">
					<div className="caption">Prototype</div>
				</div>
				<div className="content">
					<div className="scrollable_container">
						<div className="block">
							<div className="block-header">
								Drag Device
							</div>
							<div className="block-content">
								<div className="device_line">
									<div className="device desktop draggable-item" data-image-url={'https://alex1kirch.github.io/web-plugins/plugins/live_mockups/dist/backgrounds/desktop.png'}>
										<img className="draggable-item" src={require('./images/desktop.svg')} />
										<div className="device-title">Desktop</div>
									</div>
									<div className="device ipad draggable-item" data-image-url={'https://alex1kirch.github.io/web-plugins/plugins/live_mockups/dist/backgrounds/ipad.png'}>
										<img src={require('./images/tablet.svg')} />
										<div className="device-title">Tablet</div>
									</div>
									<div className="device iphone draggable-item" data-image-url={'https://alex1kirch.github.io/web-plugins/plugins/live_mockups/dist/backgrounds/iphone.png'}>
										<img className="draggable-item" src={require('./images/mobile.svg')} />
										<div className="device-title">Mobile</div>
									</div>
								</div>
							</div>
						</div>
						<div className="separator"></div>
						<div className="block">
							<div className="block-header">
								<div className="block-header__hotspot-title">
									Drag Hotspot
								</div>
								<div className="block-header__hotspot-tooltip">
									<img src={require('./images/help.svg')} />
								</div>
							</div>
							<div className="block-content">
								<div className="hotspot-btn"
									 onClick={() => this.createHotspot()}>Drag Hotspot to clickable area</div>
							</div>
						</div>
						<div className="separator"></div>
						<div className="block">
							<div className="block-header">
								<div>
									Present
								</div>
							</div>
							<div className="block-content">
								<div className="btn play-btn" onClick={() => this.onPlay()}>
									<span>Start</span>
								</div>
								{hasStartHotspot &&  <div className="play-start-select-message">
									and select starting page
								</div>}
							</div>
						</div>
						<div className="separator"></div>
						<div className="block share-options">
							<div className="block-header">
								<div>
									Share prototype
								</div>
							</div>
							<div className="block-content">
								<div className="share-options-caption">
									Create link to access this prototype
								</div>
								<label className="share-board-btn rtb-checkbox">
									<input type="checkbox" checked={isAccessByLinkEnabled} onChange={() => this.toggleShare()} />
									Make available without Sign In
								</label>
								<div className="btn copy-btn" onClick={() => this.onCopy()}>
									Copy link
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	async toggleShare() {
		const {
			isAccessByLinkEnabled,
		} = this.state

		this.setState({ isAccessByLinkEnabled: !isAccessByLinkEnabled })

		if (!isAccessByLinkEnabled) {
			await rtb.board.info.__setBoardAccessByLink('COMMENT')
		}
	}
}

ReactDOM.render(
	<Root/>,
	document.getElementById('react-app')
)
