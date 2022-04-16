import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@mui/material'
import {
	LocalHospital,
	AccountCircle,
	ApartmentOutlined
} from '@mui/icons-material'

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='relative' sx={{ zIndex: '10000' }}>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}>
						<Link to='/' style={{ color: 'white' }}>
							EthInsurance
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: 240,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: 240,
						boxSizing: 'border-box'
					}
				}}
				variant='permanent'
				anchor='left'>
				<Toolbar />
				<Divider />
				<List>
					<Link to='patient' style={{ color: 'inherit' }}>
						<ListItem button key={'Patient'}>
							<ListItemIcon>
								<AccountCircle />
							</ListItemIcon>
							<ListItemText primary={'Patient'} />
						</ListItem>
					</Link>
					<Link to='hospital' style={{ color: 'inherit' }}>
						<ListItem button key={'Hospital'}>
							<ListItemIcon>
								<LocalHospital />
							</ListItemIcon>
							<ListItemText primary={'Hospital'} />
						</ListItem>
					</Link>
					<Link to='insurance' style={{ color: 'inherit' }}>
						<ListItem button key={'Insurance Provider'}>
							<ListItemIcon>
								<ApartmentOutlined />
							</ListItemIcon>
							<ListItemText primary={'Insurance Provider'} />
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</Box>
	)
}
