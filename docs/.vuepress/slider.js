exports.getFontEndBar = (title) => {
	return [{
		title: title,
		collapsable: false,
		children: [
			'js',
			'html',
			'css',
			'vue',
			'react',
			'webpack',
			'browser',
			'babel',
			'optimize',
			'array',
			'string',
		]
	}]
}

exports.getNodeBar = (title) => {
	return [{
		title: title,
		collapsable: false,
		children: [
			'egg',
		]
	}]
}

exports.getNetWorkBar = (title) => {
	return [{
		title: title,
		collapsable: false,
		children: [
			'',
		]
	}]
}

exports.getOthersBar = (title) => {
	return [{
		title: title,
		collapsable: false,
		children: [
			'daily',
			'computerOrganization',
		]
	}]
}

exports.getAlgorithmBar = (title) => {
	return [{
		title: title,
		collapsable: false,
		children: [
			'dataStructure',
			'skills',
			'search',
			'sort',
			'complexity',
		]
	}]
}

exports.getArticlesBar = (title) => {
	return [{
		title: title,
		collapsable: false,
		children: [
			'vueProtocol',
			'simpleVuex',
		]
	}]
}