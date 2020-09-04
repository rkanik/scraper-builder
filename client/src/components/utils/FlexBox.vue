<template>
	<div class="flex-box" :class="classes" @click="$emit('click')">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'FlexBox',
	props: {
		h100: Boolean,
		direction: String,
		gap: {
			type: [String, Number],
			default: 0
		},
		cols: [String, Number],
		wrap: {
			type: Boolean,
			default: false
		},
		justifyCenter: {
			type: Boolean,
			default: false
		},
		justifyStart: {
			type: Boolean,
			default: false
		},
		justifyEnd: {
			type: Boolean,
			default: false
		},
		justifyBetween: {
			type: Boolean,
			default: false
		},
		alignCenter: {
			type: Boolean,
			default: false
		},
		ac: {
			type: Boolean,
			default: false
		},
		alignStart: {
			type: Boolean,
			default: false
		},
		alignEnd: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return {
                // Justify
                'justify-center': this.justifyCenter,
				'justify-start': this.justifyStart,
				'justify-end': this.justifyEnd,
                'justify-between': this.justifyBetween,
                // Aligns
				'align-center': this.alignCenter || this.ac,
				'align-start': this.alignStart,
                'align-end': this.alignEnd,
                // Direction
                ['flex-' + this.direction]: this.direction,
                // Columns
				['cols-' + this.cols]: this.cols,
                ['gap-' + this.gap]: this.gap !== 0,
                // Wrap
                'wrap': this.wrap,
                // Height
				'h-100p': this.h100
			}
		}
	},
}
</script>

<style lang='scss' scoped>
	.flex-box {
		display: flex;
		&.wrap {
			flex-wrap: wrap;
		}
	}
	.flex-row {
		flex-direction: row;
	}
	.flex-column {
		flex-direction: column;
	}
	.justify-center {
		justify-content: center;
	}
	.justify-start {
		justify-content: flex-start;
	}
	.justify-end {
		justify-content: flex-end;
	}
	.justify-between {
		justify-content: space-between;
	}
	.align-center {
		align-items: center;
	}
	.align-start {
		align-items: flex-start;
	}
	.align-end {
		align-items: flex-end;
	}
	.cols-2.gap-1 {
		& > div {
			width: 47.67%;
		}
	}
	.gap-1 {
		gap: 1rem;
	}
</style>