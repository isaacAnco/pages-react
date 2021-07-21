import React, { Fragment } from 'react'
import { Navigation } from './Navigation';
import classes from './Layout.module.css';

export function Layout(props) {
	return (
		<Fragment>
			<Navigation />
			<main className={classes.main}>{props.children}</main>
		</Fragment>
	)
}
