const MenuConfig = [
	{
		title: '基本',
		key: '/basics',
		icon: "icon-kongxindian",
		children: [
			{
				title: '堆栈-数组实现',
				key: '/basics/stack-array',
				icon: "icon-shixindian",
			},
			{
				title: '堆栈-链表实现',
				key: '/basics/stack-linked-list',
				icon: "icon-shixindian",
			},
			{
				title: '队列-数组实现',
				key: '/basics/queue-array',
				icon: "icon-shixindian",
			},
			{
				title: '队列-链表实现',
				key: '/basics/queue-linked-list',
				icon: "icon-shixindian",
			},
		]
	},
	{
		title: '递归',
		key: '/recursion',
		icon: "icon-kongxindian",
		children: [
			{
				title: '阶乘',
				key: '/recursion/factorial',
				icon: "icon-shixindian",
			},
			{
				title: '字符串反转',
				key: '/recursion/reversing-string',
				icon: "icon-shixindian",
			},
			{
				title: 'N 皇后问题',
				key: '/recursion/N-queens',
				icon: "icon-shixindian",
			},
		]
	},
	{
		title: '索引',
		key: '/indexing',
		icon: "icon-kongxindian",
		children: [
			{
				title: '线性搜索',
				key: '/indexing/linear-search',
				icon: "icon-shixindian",
			},
			{
				title: '二叉搜索树',
				key: '/indexing/binary-search-trees',
				icon: "icon-shixindian",
			},
			{
				title: '红黑树',
				key: '/indexing/red-black-trees',
				icon: "icon-shixindian",
			},
			{
				title: 'B 树',
				key: '/indexing/B-trees',
				icon: "icon-shixindian",
			},
			{
				title: 'B+ 树',
				key: '/indexing/B+trees',
				icon: "icon-shixindian",
			},
		]
	},
	{
		title: '排序',
		key: '/sorting',
		icon: "icon-kongxindian",
		children: [
			{
				title: '冒泡排序',
				key: '/sorting/bubble-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '选择排序',
				key: '/sorting/selection-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '插入排序',
				key: '/sorting/insertion-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '希尔排序',
				key: '/sorting/hill-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '归并排序',
				key: '/sorting/merge-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '快速排序',
				key: '/sorting/quick-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '堆排序',
				key: '/sorting/heap-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '计数排序',
				key: '/sorting/counting-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '桶排序',
				key: '/sorting/bucket-sorting',
				icon: "icon-shixindian",
			},
			{
				title: '基数排序',
				key: '/sorting/radix-sorting',
				icon: "icon-shixindian",
			},
		]
	},
	{
		title: '类堆',
		key: '/heap-like',
		icon: "icon-kongxindian",
		children: [
			{
				title: '堆',
				key: '/heap-like/heap',
				icon: "icon-shixindian",
			},
			{
				title: '二项式队列',
				key: '/heap-like/binomial-queues',
				icon: "icon-shixindian",
			},
			{
				title: '斐波那契堆',
				key: '/heap-like/fibonacci-heaps',
				icon: "icon-shixindian",
			},
			{
				title: '左派堆',
				key: '/heap-like/leftist-heap',
				icon: "icon-shixindian",
			},
			{
				title: '倾斜堆',
				key: '/heap-like/skew-heap',
				icon: "icon-shixindian",
			},
		]
	},
	{
		title: '图论',
		key: '/graph',
		icon: "icon-kongxindian",
		children:[
			{
				title: '广度优先算法',
				key: '/graph/breadth-first-search',
				icon: "icon-kongxindian"
			},
			{
				title: '深度优先算法',
				key: '/graph/depth-first-search',
				icon: "icon-kongxindian"
			},
		]
	}
];

export default MenuConfig;