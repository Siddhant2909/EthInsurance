import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Insurance = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				marginTop: '50px'
			}}>
			<Typography variant='h4'>Actions</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '500px',
					padding: '0 80px'
				}}>
				<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
					<Link
						to='add-insurance-provider'
						className='action-link-text'>
						Add Insurance Company
					</Link>
				</Button>

				<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
					<Link
						to='add-insurance-policy'
						className='action-link-text'>
						Add Insurance Policy
					</Link>
				</Button>
				<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
					<Link to='get-policy' className='action-link-text'>
						Get Policy Details
					</Link>
				</Button>
			</Box>
		</div>
	)
}

export default Insurance
