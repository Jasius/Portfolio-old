<template>
  	<nav role="navigation">
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA9SURBVDhPY6AaMJ5xq5wamMFkxu3/1MBQd40CugDj6bd3UwNTz6BRQEeALQOSgxlMpt/uoAaGuotSwMAAAFHfAhzFXIuJAAAAAElFTkSuQmCC" id="toggle-menu"/>
		<div class="logo"><a href="/">Jaska</a>
		</div>
		<ul>
			<li class="targeted" id="active"><a href="#">Home</a></li>
			<li class="targeted"><a href="#about">About</a></li>
			<li class="targeted"><a href="#projects">Featured Projects</a></li>
			<figure id="indicator"></figure>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
$font-stack: "Open Sans", Helvetica Neue, Arial, sans-serif;
$font-secondary: "Segoe UI", Helvetica Neue, Arial, sans-serif;
$light-blue: #3498db;

nav {
	position: absolute;
	top: 0;
	width: 100%;
	padding: 0;
	background: #fff;
	line-height: 3.125em;
	overflow: visible;
	border-bottom: 1px solid #DCDDD8;
	transition: top .5s;
	z-index: 99;
	a {
		text-decoration: none;
	}
	ul {
		margin: 0;
		padding: 0;
		width: auto;
		height: auto !important;
		list-style: none;
		display: flex;
		flex-flow: row wrap;
		-webkit-flex-flow: row wrap;
		justify-content: center;
		color: #1d6fa5;
		li>a {
			padding: 0 20px;
			color: $light-blue;
			font-weight: 600;
			display: block;
			li>a span {
				margin-right: 4px;
				color: #0078D7;
			}
		}
	}
	ul li {
		float: right;
		margin: 0;
		padding: 0;
		text-align: center;
		cursor: pointer;
		&:hover,
		&:active {
			background: #f2f2f2;
		}
	}
}

.nav-hide {
	top: -51px;
	transition-delay: 2s;
}

.has-child {
	position: relative;
	left: 0;
	&:after {
		position: absolute;
		margin-top: -5px;
		top: 27px;
		right: 5px;
		content: "";
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 8px 5px 0 5px;
		border-color: #0078D7 transparent transparent transparent;
	}
}

.has-child .dropdown {
	position: absolute;
	left: -40px;
	z-index: 99;
	display: none;
	width: 200px;
	background: #fff;
	border: 1px solid #EFEFEF;
	border-top: none;
}

.has-child .dropdown>li {
	float: left;
	width: 100%;
	font-weight: 600;
	color: $light-blue;
	border-bottom: 1px solid #EFEFEF;
}

.has-child .dropdown li a {
	display: block;
}

.logo a {
	float: left;
	margin: 0;
	padding: 0 15px;
	font-size: 1.25em;
	font-weight: 600;
	color: $light-blue;
	&:hover {
		background: #f2f2f2;
		color: #1d6fa5;
	}
}

#toggle-menu {
	position: absolute;
	right: 0;
	padding: 1em;
	top: 0;
	display: none;
	cursor: pointer;
}

#indicator {
	bottom: 0;
	margin: 0;
	height: 3px;
	transition: all .2s ease-out;
	position: absolute;
}

#active {
	color: $light-blue;
}

@media only screen and (max-width: 45em) {
	.has-child .dropdown {
		position: relative;
		left: 0;
		z-index: auto;
		margin-top: 0;
		display: block;
		width: 100%;
		border-radius: 0;
	}
	.has-child .dropdown>li {
		padding-left: 20px;
		background: #fff;
	}
	.has-child:after {
		position: absolute;
		margin-top: -5px;
		top: 25px;
		right: 20px;
		content: "";
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 10px 5px 0 5px;
		border-color: #0078D7 transparent transparent transparent;
	}
	.logo {
		width: 100%;
		border: 0;
		border-radius: 0;
	}
	#toggle-menu {
		display: block;
	}
	nav ul,
	#indicator {
		display: none;
	}
	nav ul li {
		display: block;
		width: 100%;
		text-align: left;
		border-bottom: 1px solid #f2f2f2;
		&:hover>a {
			color: #1d6fa5;
		}
	}
}

@media only screen and (max-width: 62.5em) {
	.logo {
		border-radius: 0;
	}
	nav {
		position: fixed;
		margin-top: 0;
		border: 0;
	}
}
</style>