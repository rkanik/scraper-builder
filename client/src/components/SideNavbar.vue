<template>
	<div class="side-navbar brr">
		<ul class="side-navbar-navs">
			<router-link
				class="side-navbar-navs--item"
				v-for="nav in navs"
				:key="nav.id"
				:to="nav.path"
				tag="li"
			>
				<feather :type="nav.icon" size="20" strokeWidth="1.5"></feather>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'SideNavbar',
	data: () => ({
		navs: [
			{ id: 1, name: 'Presets', icon: 'home', path: '/builder' },
			{ id: 2, name: 'Builder', icon: 'pen-tool', path: '/builder/new' },
			{ id: 3, name: 'Settings', icon: 'settings', path: '/settings' }
		]
	}),
}
</script>

<style lang='scss'>
	.side-navbar {
		width: var(--side-navbar-width);
	}
	.side-navbar-navs {
		padding: 0.4rem;
		&--item {
			padding: 0.6rem 0;
			cursor: pointer;
			justify-content: center;
			display: flex;
			border-radius: 0.25rem;
			margin-bottom: 0.25rem;
			&:not(.router-link-exact-active):hover {
				background-color: var(--bg-secondary);
			}
		}
		&--item:last-child {
			margin-bottom: 0;
		}
	}
	.router-link-exact-active {
		color: var(--accent);
		background-color: rgba($accent, 0.20);
	}
</style>