<template>
	<Scrollbar class="builder-layout">
		<Header></Header>
		<FlexBox>
			<SideNavbar></SideNavbar>
			<Resizable class="sidebar brr" v-bind="sidebarResizableOptions">
				<Scrollbar height="100%">
					<p class="sidebar--text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error magnam, numquam in velit est illo itaque. Mollitia quae at enim quia dolor cum in eos nulla eveniet obcaecati accusantium repudiandae et veritatis qui architecto ipsam voluptas recusandae, atque omnis saepe totam numquam labore perspiciatis. Fuga aperiam earum odit est!
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur a illo eligendi facilis autem aut sunt laudantium unde? Ea sequi commodi nisi eos in saepe, excepturi, porro, veniam sint dolorem atque ullam nulla earum at adipisci hic incidunt. Inventore dolores provident sit voluptatem excepturi, consequuntur laborum facilis. Repellendus id ex eveniet! Omnis voluptas explicabo iusto, labore libero aliquam. Consectetur quisquam quo eligendi rerum temporibus, laborum dolores ea aperiam adipisci beatae. Molestias porro nesciunt veniam quas recusandae incidunt fugit tempora molestiae inventore atque unde, rerum culpa neque ratione suscipit dolor cumque eum excepturi repudiandae vel, sequi fuga maiores. Doloribus provident et dolores perspiciatis molestiae ex aperiam impedit asperiores, aut quae nesciunt iste, temporibus commodi rem ducimus in vitae odio ratione voluptas magnam inventore? Quasi corrupti architecto tenetur laudantium molestiae unde debitis suscipit error quis eaque aperiam ipsa quo et sequi quam harum nisi fugiat exercitationem perferendis iste, quisquam incidunt eos assumenda. Enim, alias? Veniam in dolorem unde tenetur labore, natus facilis inventore voluptate accusantium expedita cumque fugit modi distinctio illo amet minima molestiae dignissimos tempora quaerat quis ducimus a delectus? Asperiores eligendi inventore, aspernatur consequuntur illum ducimus odio amet modi tempora ipsa hic nemo quae rerum nam dolor. Sit sequi, deserunt officiis expedita quis itaque obcaecati? Consequatur architecto nulla animi et sequi culpa commodi modi tenetur sed magnam, pariatur illum, nam tempora facilis magni ex natus nisi. Ea animi amet, vel id quaerat provident similique commodi quae tenetur culpa, molestias atque placeat totam voluptas non impedit fugiat, nostrum repellendus a omnis eum! Quod architecto iure totam minima doloremque aliquid molestiae reprehenderit? Repellendus facilis ex alias deleniti vitae dolorem nobis nulla, culpa nisi quam est repudiandae. Eius officiis ut culpa sequi! Dolorem velit culpa magnam incidunt tempora architecto obcaecati sunt hic iste totam pariatur eveniet, aspernatur exercitationem cumque, modi aut iure, nostrum dolorum quis accusamus quaerat possimus voluptatibus! Id molestias quidem facilis perferendis nostrum totam, quibusdam expedita ut hic neque commodi voluptate asperiores at corrupti temporibus eaque maxime similique, illo dolores laborum eligendi vel possimus quaerat. Id officiis quibusdam at voluptas blanditiis excepturi dolorum corrupti ab reprehenderit officia consequuntur voluptates, accusamus, nihil dicta provident necessitatibus molestiae deleniti obcaecati saepe! A ad officiis molestias nostrum officia aliquid totam illo. Perferendis vero impedit magni harum corporis rerum neque reiciendis quibusdam, nesciunt ab cum odit sequi ducimus, autem ut, alias quod? Cum deserunt aperiam quis quo, doloribus excepturi praesentium explicabo expedita at aliquid ipsum cupiditate quam! Sit, earum provident eveniet ex expedita suscipit id quae architecto natus officiis, consequatur vitae quaerat inventore doloremque error cupiditate quibusdam fugit pariatur, fugiat magnam incidunt! Dolore cum odit consequatur ipsam praesentium possimus facere mollitia perferendis accusantium at labore pariatur tenetur adipisci tempore error, consectetur minus veniam beatae, quos alias iure odio ea minima? Placeat voluptate fugit alias iusto corrupti tenetur sit nihil enim labore ut in debitis asperiores, totam exercitationem iste, itaque odit expedita molestias. At expedita provident culpa incidunt numquam temporibus inventore consequuntur nostrum, laudantium eius possimus nobis animi libero deleniti. Beatae iusto exercitationem dignissimos cum alias voluptatem!
					</p>
				</Scrollbar>
			</Resizable>
			<router-view></router-view>
		</FlexBox>
	</Scrollbar>
</template>

<script>
// Components
import Header from '@/components/Header'
import SideNavbar from '@/components/SideNavbar'

export default {
	name: 'BuilderLayout',
	components: {
		[Header.name]: Header,
		[SideNavbar.name]: SideNavbar,
	},
	data: () => ({
		sidebarResizableOptions: {
			width: 16 * 16,
			minWidth: 16 * 16,
			maxWidth: 28 * 16,
			active: ['r']
		}
	}),
}
</script>

<style lang='scss'>
	.builder-layout {
		height: 100vh;
	}
	.sidebar {
		height: 100% !important;
		&--text {
			color: #757575;
		}
		& > div {
			padding: 1rem;
		}
	}
	header + div {
		height: calc(100vh - 48px);
	}
</style>