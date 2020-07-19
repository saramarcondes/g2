/* eslint-disable */

// https://github.com/system-ui/theme-ui/blob/master/packages/css/src/index.ts
export function get(obj, key, def, p, undef) {
	const path = key && typeof key === 'string' ? key.split('.') : [key];
	for (p = 0; p < path.length; p++) {
		obj = obj ? [path[p]] : undef;
	}
	return obj === undef ? def : obj;
}

export const defaultBreakpoints = [40, 52, 64].map((n) => n + 'em');

const defaultTheme = {
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

const aliases = {
	bg: 'backgroundColor',
	m: 'margin',
	mt: 'marginTop',
	mr: 'marginRight',
	mb: 'marginBottom',
	ml: 'marginLeft',
	mx: 'marginX',
	my: 'marginY',
	p: 'padding',
	pt: 'paddingTop',
	pr: 'paddingRight',
	pb: 'paddingBottom',
	pl: 'paddingLeft',
	px: 'paddingX',
	py: 'paddingY',
};

export const multiples = {
	marginX: ['marginLeft', 'marginRight'],
	marginY: ['marginTop', 'marginBottom'],
	paddingX: ['paddingLeft', 'paddingRight'],
	paddingY: ['paddingTop', 'paddingBottom'],
	size: ['width', 'height'],
};

export const scales = {
	color: 'colors',
	backgroundColor: 'colors',
	borderColor: 'colors',
	caretColor: 'colors',
	opacity: 'opacities',
	margin: 'space',
	marginTop: 'space',
	marginRight: 'space',
	marginBottom: 'space',
	marginLeft: 'space',
	marginX: 'space',
	marginY: 'space',
	marginBlock: 'space',
	marginBlockEnd: 'space',
	marginBlockStart: 'space',
	marginInline: 'space',
	marginInlineEnd: 'space',
	marginInlineStart: 'space',
	padding: 'space',
	paddingTop: 'space',
	paddingRight: 'space',
	paddingBottom: 'space',
	paddingLeft: 'space',
	paddingX: 'space',
	paddingY: 'space',
	paddingBlock: 'space',
	paddingBlockEnd: 'space',
	paddingBlockStart: 'space',
	paddingInline: 'space',
	paddingInlineEnd: 'space',
	paddingInlineStart: 'space',
	inset: 'space',
	insetBlock: 'space',
	insetBlockEnd: 'space',
	insetBlockStart: 'space',
	insetInline: 'space',
	insetInlineEnd: 'space',
	insetInlineStart: 'space',
	top: 'space',
	right: 'space',
	bottom: 'space',
	left: 'space',
	gridGap: 'space',
	gridColumnGap: 'space',
	gridRowGap: 'space',
	gap: 'space',
	columnGap: 'space',
	rowGap: 'space',
	fontFamily: 'fonts',
	fontSize: 'fontSizes',
	fontWeight: 'fontWeights',
	lineHeight: 'lineHeights',
	letterSpacing: 'letterSpacings',
	border: 'borders',
	borderTop: 'borders',
	borderRight: 'borders',
	borderBottom: 'borders',
	borderLeft: 'borders',
	borderWidth: 'borderWidths',
	borderStyle: 'borderStyles',
	borderRadius: 'radii',
	borderTopRightRadius: 'radii',
	borderTopLeftRadius: 'radii',
	borderBottomRightRadius: 'radii',
	borderBottomLeftRadius: 'radii',
	borderTopWidth: 'borderWidths',
	borderTopColor: 'colors',
	borderTopStyle: 'borderStyles',
	borderBottomWidth: 'borderWidths',
	borderBottomColor: 'colors',
	borderBottomStyle: 'borderStyles',
	borderLeftWidth: 'borderWidths',
	borderLeftColor: 'colors',
	borderLeftStyle: 'borderStyles',
	borderRightWidth: 'borderWidths',
	borderRightColor: 'colors',
	borderRightStyle: 'borderStyles',
	borderBlock: 'borders',
	borderBlockEnd: 'borders',
	borderBlockEndStyle: 'borderStyles',
	borderBlockEndWidth: 'borderWidths',
	borderBlockStart: 'borders',
	borderBlockStartStyle: 'borderStyles',
	borderBlockStartWidth: 'borderWidths',
	borderBlockStyle: 'borderStyles',
	borderBlockWidth: 'borderWidths',
	borderEndEndRadius: 'radii',
	borderEndStartRadius: 'radii',
	borderInline: 'borders',
	borderInlineEnd: 'borders',
	borderInlineEndStyle: 'borderStyles',
	borderInlineEndWidth: 'borderWidths',
	borderInlineStart: 'borders',
	borderInlineStartStyle: 'borderStyles',
	borderInlineStartWidth: 'borderWidths',
	borderInlineStyle: 'borderStyles',
	borderInlineWidth: 'borderWidths',
	borderStartEndRadius: 'radii',
	borderStartStartRadius: 'radii',
	outlineColor: 'colors',
	boxShadow: 'shadows',
	textShadow: 'shadows',
	zIndex: 'zIndices',
	width: 'sizes',
	minWidth: 'sizes',
	maxWidth: 'sizes',
	height: 'sizes',
	minHeight: 'sizes',
	maxHeight: 'sizes',
	flexBasis: 'sizes',
	size: 'sizes',
	blockSize: 'sizes',
	inlineSize: 'sizes',
	maxBlockSize: 'sizes',
	maxInlineSize: 'sizes',
	minBlockSize: 'sizes',
	minInlineSize: 'sizes',
	// svg
	fill: 'colors',
	stroke: 'colors',
};

const positiveOrNegative = (scale, value) => {
	if (typeof value !== 'number' || value >= 0) {
		if (typeof value === 'string' && value.startsWith('-')) {
			const valueWithoutMinus = value.substring(1);
			const n = get(scale, valueWithoutMinus, valueWithoutMinus);
			return `-${n}`;
		}
		return get(scale, value, value);
	}
	const absolute = Math.abs(value);
	const n = get(scale, absolute, absolute);
	if (typeof n === 'string') return '-' + n;

	return Number(n) * -1;
};

const transforms = [
	'margin',
	'marginTop',
	'marginRight',
	'marginBottom',
	'marginLeft',
	'marginX',
	'marginY',
	'marginBlock',
	'marginBlockEnd',
	'marginBlockStart',
	'marginInline',
	'marginInlineEnd',
	'marginInlineStart',
	'top',
	'bottom',
	'left',
	'right',
].reduce(
	(acc, curr) => ({
		...acc,
		[curr]: positiveOrNegative,
	}),
	{},
);
