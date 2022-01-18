// home.js
// Author: S. Sigman     Date: Jan 1, 2022
// This component houses the home (landing) page for
// the PlantGram Application.
//
// Modification Log:
//
import React from 'react';
// card imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import HomeHeader from './HomeHeader';
import Footer from './Footer';

const Home = function Home (){
	return (
	<div>
		<HomeHeader></HomeHeader>
		<Box sx={{ flexGrow: 1, my: 2, mx: 2 }}>
			<Grid container rowSpacing={2} columnSpacing={{md: 2 }}>
				<Grid item xs={12} md={6}>
					<Card>
						<CardHeader  
							title="PlantGram" 
							subheader="Communities interested in sharing."
						/>
						<CardContent>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce 
							tincidunt, sem ac tincidunt hendrerit, eros ipsum pellentesque ex, vel consequat 
							ligula est in tortor. Proin ut volutpat odio. Sed sed semper felis, et mattis 
							libero. Phasellus pharetra viverra augue quis laoreet. Vivamus quis arcu vitae dolor 
							fermentum rutrum. Praesent vehicula enim non nisi ultricies interdum. Morbi sed 
							condimentum est, vitae semper lorem. Nam felis velit, egestas eget ex vel, finibus facilisis libero.
						</p>
                    	<p>Pellentesque congue lorem in fermentum tincidunt. Etiam a 
							pellentesque mi. Proin nibh tortor, semper et nisi at, euismod aliquam sem. Cras 
							vel sollicitudin nulla. Quisque eu molestie mi, vel vestibulum justo. Vestibulum 
							ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
							Aenean urna arcu, scelerisque id efficitur sed, euismod non tellus. Phasellus 
							scelerisque in ipsum non scelerisque. Proin ac neque felis. Aenean non erat non 
							mauris rhoncus ornare. Donec suscipit blandit quam.</p>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card>
						<CardHeader  
							title="Communities"
							subheader="Clubs of friends sharing discoveries."
						/>
						<CardContent>
						<p class="card-text">Proin at odio eget est vulputate tincidunt in at neque. Vivamus 
							accumsan purus condimentum porttitor luctus. Integer a imperdiet libero. Mauris sed 
							tellus leo. Morbi aliquam sapien id risus efficitur, nec fermentum justo fermentum. 
							Sed nec enim neque. Donec pulvinar mauris tempus elit lobortis luctus. Mauris 
							sagittis eleifend lectus, vel convallis purus aliquet vel. Vestibulum finibus, 
							quam rutrum pellentesque cursus, nisl ipsum molestie ligula, vitae pharetra turpis leo 
							aliquet ligula.</p>
                    <p class="card-text">Vivamus rhoncus, mauris id facilisis maximus, purus mi vulputate 
							ligula, eget mattis nibh nibh et ipsum. Vestibulum non libero laoreet, laoreet 
							lorem in, ultrices sapien. Proin egestas efficitur magna sit amet tristique. In 
							finibus egestas sem a porttitor. Mauris et vulputate massa. Curabitur pharetra, 
							justo sit amet lobortis pellentesque, lacus metus molestie mi, sit amet commodo 
							risus velit ut velit. Aliquam at orci at est malesuada aliquam ac sed dolor. Sed 
							id tortor at ex mollis placerat egestas sed leo.</p>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
		<Footer />
	</div>)
}

export default Home;
