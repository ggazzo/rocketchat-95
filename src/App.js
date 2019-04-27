import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
	reset,
	themes,
	AppBar,
	Toolbar,
	TextField,
	List,
	ListItem,
	Button,
	Divider,
	Window,
	WindowContent,
	WindowHeader,
	Tabs,
	Tab,
	TabBody,
	Fieldset,
	NumberField,
	Checkbox
} from 'react95';
import Draggable, { DraggableCore } from 'react-draggable';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

class TabsDemo extends React.Component {
	state = {
		activeTab: 0,
	};
	handleChange = value => this.setState({ activeTab: value });
	render() {
		const { activeTab } = this.state;
		return (
			<Window style={{ width: 350 }}>

					<WindowHeader>👗 store.exe</WindowHeader>

				<WindowContent>
					<Tabs value={activeTab} onChange={this.handleChange}>
						<Tab value={0}>Shoes</Tab>
						<Tab value={1}>Accesories</Tab>
						<Tab value={2}>Clothing</Tab>
					</Tabs>
					<div style={{ height: 300 }}>
						{activeTab === 0 && (
							<TabBody>
								<Fieldset label="Order:">
									<div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
									<NumberField width={'100%'} min={0} value={0} onChange={() => null} />
									<Checkbox name="shipping" value="fast" label="Fast shipping" onChange={() => null} checked />
								</Fieldset>
							</TabBody>
						)}
						{activeTab === 1 && <TabBody>Accesories stuff here</TabBody>}
						{activeTab === 2 && <TabBody>Clothing stuff here</TabBody>}
					</div>
				</WindowContent>
			</Window>
		);
	}
}


function Menu() {
	const [open, setOpen] = React.useState(false);

	function handleClick() {
		setOpen(!open);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			{open && (
				<List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
					<ListItem>👨‍💻 Profile</ListItem>
					<ListItem>📁 My account</ListItem>
					<Divider />
					<ListItem disabled>🔙 Logout</ListItem>
				</List>
			)}
			<Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
				{/* <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} /> */}
				Start
      </Button>
		</div>
	);
}




export default props =>
  <div className="App">
		<ResetStyles />
    <ThemeProvider theme={themes.default}>

			<div className="App">
			<AppBar fixed={false}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
					<Menu/>
        	<TextField placeholder="Search..." width={150} style={{ marginLeft: 4 }}/>
      </Toolbar>
    </AppBar>
			<Draggable><div><TabsDemo /></div></Draggable>
			</div>
    </ThemeProvider>
  </div>
