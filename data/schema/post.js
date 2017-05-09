const _ = require('lodash');
const faker = require('faker/locale/zh_CN');
const imgList = require('../imgList');
faker.locale = "zh_CN";
var htmlCodes = [
  '###  Hello Word',
  '```javascript',
  'reactDOM.render(',
  '	<h1>hello react</h1>,',
  '  	document.getElementById(\'app\')',
  ')',
  '```',
  '#### 创建元素方式',
  '``` javascript',
  'const element = <h1>Now is {new Date().toLocaleTimeString()}</h1>;',
  'const element = React.createElement(',
  '	\'h1\',',
  '  	{',
  '      classNmae: \'className\',',
  '      children: \'content\', // innerHTML',
  '  	},',
  '  	// \'content\', // innerHTML',
  ')',
  '  ',
  'const element = {',
  '  type: \'h1\',',
  '  props: {',
  '    className: \'className\',',
  '  	children: \'content\',',
  '  },',
  '},',
  '```',
  '#### 定义组件',
  '``` javascript',
  '// ES2015',
  'class ComponentName extends React.components {',
  '  render () {',
  '    return <h1>Hello, {this.props.name}</h1>',
  '  }',
  '}',
  '// ES5',
  'function ComponentName(props) {',
  '  return <h1>{props.name}</h1>',
  '}',
  '```',
  '#### 渲染组件',
  '``` javascript',
  '// pass data',
  'ReactDOM.render(',
  '	<ComponentName name="Gavin"></ComponentName>,',
  '  	document.getElementById(\'root\')',
  ')',
  '```',
  '#### Props are Read-Only & pure function',
  '`props`不应该在组件中修改,  当`props`',
  '> All React components must act like pure functions with respect to their props.',
  '\n',
  '**why pure function?**  当函数参数为对象, 在传入参数时, 实际传入的是一个引用, 一旦在函数中对这个参数对象进行修改, 会影响到函数外的对象.',
  '``` javascript',
  'const me = {',
  '  name: \'Gavin\',',
  '  likes: \'Coding\'',
  '};',
  'function hasChange (me) {',
  '  me.likes = \'Music\';',
  '}',
  'hasChange(me);',
  'console.log(me) // me.likes === \'Music\'',
  '```',
  '#### 动态更新UI -> state的使用',
  '基础用法',
  '``` javasc',
  'class Clock extends React.Component{',
  '  constructor(props) {',
  '    super(constructor);',
  '    this.state = {date: new Date()}; //设置 state',
  '  }',
  '  // 组件周期钩子函数',
  '  componentDidMount() {',
  '  	// 不能这样直接操作state(this.state = \'XXX\') -> 用setState',
  '    this.timerId = setInterval(() => this.setState({',
  '      date: new Date()',
  '    }), 1000);',
  '  }',
  '  render() {',
  '    return <h1>{this.state.date.tolocaleTimeString()}</h1>',
  '  }',
  '}',
  '```',
  '##### 注意事项',
  '- 不能直接修改`state`而是使用`setState`',
  '  ``` java',
  '  this.state.date = \'\'; // 错误',
  '  this.setState({',
  '    state: \'\', // 正确',
  '  })',
  '  ```',
  '- `state`更新可能是异步的. ',
  '`React`从性能的角度出发,  可能会将多个`setState`操作集中到一次更新, 正因为如此`props`和`state`可能是异步更新.  所以要避免使用以下形式**计算属性**',
  '```javascript',
  'this.setState({',
  '  total: this.state.prev + this.props.now,',
  '});',
  '```',
  '使用以下函数形式的`setState`可以实时更新',
  '``` javascript',
  'this.setState((prevState, props) => ({',
  '   total: prevState.total + props.now',
  '}));',
  '```',
  '- `state`更新 & 混合策略',
  ' 假设`state = {data: \'\', time: \'\'}` 执行`this.setState({data: 111})` 并不会导致`state = {data: 111}`, `setState`  只覆盖相应的部分, 其他数据不会做任何改动.',
  '#### 事件绑定',
  '``` javascript',
  'class Toggle extends React.component {',
  '  constructor(props) {',
  '    this.state = {isToggle: true};',
  '    this.handleClick = this.handleClick.bind(this); // this -> 组件对象',
  '  }',
  '  handleClick(e) {',
  '    // e -> event',
  '    this.setState((prevState) => ({',
  '      isToggle: !prevState.isToggle',
  '    }));',
  '  }',
  '  render () {',
  '    return <h1>',
  '      {String(this.state.isToggle)}',
  '      <button onClick={this.handleClick}></button>',
  '    	</h1>',
  '  }',
  '}',
  '```',
  '##### 绑定`this`到组件对象的两种方式',
  '- 箭头函数定义事件',
  '```javascript',
  'handleClick = () => {',
  '  this.setState((preState) => ({',
  '    isToggle: !prevState.isToggle',
  '  }))',
  '}',
  '<button onClick={this.handleClick}></button>',
  '// 或者',
  'handleClick (e) {',
  '  this.setSate((prevState) => ({',
  '    isToggle: !prevState.isToggle',
  '  }))',
  '}',
  '<button onClick={(e) => {this.handleClick(e)}}></button>',
  '```',
  '第二种方法存在的问题可能会导致一定的性能问题, 因此建议在`constructor`中绑定, 或者用arrow function 定义事件处理.',
  '#### 条件渲染',
  '**if...else**',
  '```javascript',
  'render () {',
  '  let isLogIn = this.props.isLogIn;',
  '  let button = null',
  '  if (isLogIn) {',
  '    button = \'...\';',
  '  } else {',
  '    button = \'...\';',
  '  }',
  '  return (',
  '    <div>',
  '    	{button}',
  '    </div>',
  '  )',
  '}',
  '```',
  '**&&, ||操作符**',
  '``` javascript',
  '{messages.length > 0 && <h2>here</h2>}',
  '{messages.length > 0 || <h2>here</h2>}',
  '```',
  '**三元表达式**',
  '``` javascript',
  '{isTrue ? \'true\' : \'false\'}',
  '// 内嵌组件',
  '{isTrue ? (<Message onClick={....}/>) : (Message onClick={....})}',
  '```',
  '**避免组件被渲染**',
  '```javascript',
  'class Component extends React.Component{',
  '  // ....',
  '  render() {',
  '  	if (!this.props.warn) {',
  '    	return null; // 避免被渲染',
  '  	}    ',
  '  }',
  '}',
  '```',
  '即使`render`函数返回`null`依然不影响该组件生命周期函数的触发.',
  '### list渲染',
  '其中`key`用来帮助`React`识别 那个元素进行了变动, `key`应用保证其在list中唯一性而不必保证全局唯一性.',
  '```javascript',
  'render () {',
  '  const numbers = [1,2,3,4,5];',
  '  // 使用index 作为key 是不得已而为之 -> 会导致性能问题',
  '  const listItems = numbers.map((item, index) => <li key={ index.toString() }>{ item }</li>);',
  '  return (<ul>{listItems}</ul>);',
  '}',
  '```',
  '##### 组件循环',
  '`key`在数组上下文才会有意义, 一个组件列表, 它的`key`应该从容器组件定义',
  '```javascript',
  'const ListItems = numbers.map((item, index) => <ListItem key={index.toString()}></ListItem>)',
  '```',
  '##### JSX & map',
  '`jsx`允许内嵌表达式, 因此可以简写为',
  '```javascript',
  'render () {',
  '  return <ul>{this.props.posts.map((item, index) => <li key={index}>{item}</li>)}</ul>',
  '}',
  '```',
  '#### 表单',
  '`React`只是实现`View`层, 所以表单的数据双向绑定需要自己实现',
  '`textarea`的值在`React`中不应该定义在`children`里面(`<textarea>some text</textarea>`)而应该`<textarea value={...}></textarea>`,',
  '```javascript',
  'class FormComponent extends React.Component {',
  '  state = {name: \'Gaivn\'};',
  '  handleChnage = (e) => {',
  '  	this.setState({',
  '      name: e.target.value',
  '  	})',
  '}',
  '  render () {',
  '    return (',
  '    	<form>',
  '      		<input value={this.state.name} onChange={this.handleChange}/>',
  '      	</form>',
  '    )',
  '  }',
  '}',
  '```',
  '#### 组件间的`state`共享',
  '如何进行同级组件之间的`state`共享通信?  提升`state`到共同的父级组件, 提升`state` 会需要写更多的代码, 相比双向数据绑定而言,  但是比较与双向数据绑定更加容易定位`bug`, 因为`props`是不允许在子组件进行修改的, 因此修改的数据只有可能在其传入的组件父组件进行修改. 而双向数据绑定意味着数据有多个修改源.',
  '``` javascript',
  'class InputBox extends React.Component {',
  '  handleChange = (e) => {',
  '    this.props.onChange(e.target.value)',
  '  }',
  '  render () {',
  '    return (',
  '        <input value={this.props.messages} onChange={this.handleChange}/>',
  '    )',
  '  }',
  '}',
  'class DisplayBox extends React.Component {',
  '  render () {',
  '    return (',
  '      <div>{this.props.messages}</div>',
  '    )',
  '  }',
  '}',
  'class Container extends React.Component {',
  '  state = {messages: \'Gaivn\'}',
  '  handleInput = (value) => {',
  '    this.setState({messages: value})',
  '  }',
  '  render () {',
  '    return (',
  '      <div>',
  '        <DisplayBox messages={this.state.messages}></DisplayBox>',
  '        <InputBox messages={this.state.messages} onChange={this.handleInput}/>',
  '      </div>',
  '    )',
  '  }',
  '}',
  'ReactDOM.render(',
  '  <Container>',
  '  </Container>,',
  '  document.getElementById(\'root\')',
  ')',
  '```',
  '#### 容器组件',
  '像`Dialog`之类的组件, 提供一个 容器, 在组件中用`this.props.children`接收. 与Vue的`slot`类似, 不过`slot`比这个更加强大.....',
  '``` JavaScript',
  'class Dialog extends React.Component {',
  '  render () {',
  '    return(',
  '    	<div>',
  '      		<h3 className="dialog-title">{this.props.title}</h3>',
  '      		<p className="dialog-body">{this.props.content}</p>',
  '      		{this.props.children}',
  '      	</div>',
  '    )',
  '  }',
  '}',
  'ReactDOM.render(',
  '	<Dialog title={...} content={...}>',
  '  		<div>slot content</div>',
  '  	</Dialog>,',
  '  	document.getElementById(\'#root\')',
  ')',
  '```',
  '#### State & Prop',
  '# TDOO',
  '#### prop验证',
  '在`React`对象下, 有一个`PropTypes`属性, 用来对`prop`进行验证, 出于性能考虑`propTypes` 只在**开发模式** 对`props`进行检查, 当值不符合要求会在控制台输出错误提示. 所有的`props`默认是可选的.',
  '``` JavaScript',
  '// 定义好一个组件Dialog, props -> name, ',
  'Dialog.propTypes = {',
  '  name: React.propTypes.string',
  '  name: React.propTypes.string.isRequired // 必须传值',
  '  // 自定义',
  '  name (props, propName, componentName) {',
  '    if (...) {',
  '      return new Error(...)',
  '    }',
  '  }',
  '}',
  '```',
  '对于特殊的`props` -> `children` 只允许单独的`children` -> `children: React.PropTypes.element.isRequired`',
  '另一个比较重要的话题 -> 默认值, 值得注意的是, `propTypes`的类型检查是在`defaultProps`简析之后, 也就是说, `dafaultProps`也必须符合`propsTypes`',
  '``` javascript',
  'ComponentName.defaultProps = {',
  '  name: \'Gavin\'',
  '}',
  '```',
  '总的来说, `React`这方面这个比`Vue`要强大一点.',
  '#### ref & DOM操作',
  '在`React`中要进行传统的`DOM`操作, 可以使用`ref`, `ref`与`Vue` 的ref比较相似',
  '``` javascript',
  'class DisplayBox extends React.Component {',
  '  componentDidMount () {',
  '    console.log(this.Node) // 输出选中的元素',
  '  }',
  '  render () {',
  '    return (',
  '      <div ref={el => this.Node = el}>{this.props.messages}</div>',
  '    )',
  '  }',
  '}',
  '```',
  '`ref` 也可以用在组件上,  只不过`callback`参数将会是该组件实例.',
  '假如`ref`的`callback`以`inline-function`的形式进行定义, 在DOM 更新时会对其进行重新渲染, 之前用行内箭头函数绑定this到组件实例也是同样的道理. 所以可以这样写`ref={addNode}`在`addNode`中进行赋值操作',
  '### JSX 深入',
  '`JSX`其实是`React.createElement(component, props, ...children)`的语法糖, 值得注意的是,, 写`JSX`的要保证`React`是`in scope`的.',
  '``` javascript',
  '<Dialog content={...} title={...}></Dialog>',
  '// 等同于',
  'React.createElement(',
  '	Dialog,',
  '  	{content: \'...\', title: \'...\'},',
  '  	null',
  ')',
  '```',
  '**组件名称约定为大写**, 方便与html 元素进行区分, 如果小写的话, `React`会把其当做HTML 元素渲染.',
  '##### Dot Notation',
  '``` javascript',
  'import React from \'react\'',
  'const MyComponent = {',
  '  DatePicker (props) {',
  '    return <div></div>',
  '  }',
  '}',
  '// 然后可以这样写',
  'ReactDOM.render(',
  '	<MyComponent.DatePicker />,',
  '  	element',
  ')',
  '```',
  '##### JS Expression in JSX',
  '可以在`JSX`中使用`JS`表达式, `if`语句和`for`循环不是表达式, ',
  '``` javascript',
  '<MyComponent foo={props.name ? true : false }></MyComponent>',
  '```',
  '如果一个属性你需要传入一个布尔值.  你可以考虑这样写',
  '``` javascript',
  '<MyComponent autocomplete /> // 等价于',
  '<MyComponent autocomplete={true} />  ',
  '  ',
  '```',
  '##### 扩展操作符',
  '```javascript ',
  'const props = {name: \'Gaivn\', likes: [\'music\', \'code\']}',
  '<MyComponent {...props}/>',
  '// 等价于',
  '<MyComponent name="Gavin" likes={[\'music\', \'code\']}/>',
  '```',
  '##### function as children',
  '``` javascript',
  'class Container extends React.Component {',
  '  render () {',
  '    let items = [];',
  '    let i = 0;',
  '    console.log(this.props.timeNum)',
  '    while(i < this.props.timeNum) {',
  '      i++;',
  '      items.push(this.props.children(i))',
  '    }',
  '    return (',
  '      <div>',
  '        {items}',
  '      </div>',
  '    )',
  '  }',
  '}       ',
  'ReactDOM.render(',
  '  <Container timeNum="10">',
  '    {(index) => <li>{index}</li>}',
  '  </Container>,',
  '  document.getElementById(\'root\')',
  ')',
  '```',
  '另外当`children`的值为`false` `null` `undefined` `true`  都是可行的,  但是他们都不会被渲染.',
  '#### Component Life Cycle',

].join("\r");

var htmlCodes2 = [
  '文丨雪花如糖',
  '## 01.贺铸其人',
  '愁一直是古代文人心中难以释怀的情绪。即使身为七尺男儿，也有散不尽、化不开的愁肠百结。',
  '如南唐后主李煜说:"问君能有几多愁，恰似一江春水向东流。"水奔流不息，愁也不息。国破家亡，偏居一隅，作为一国之君，他的愁悲壮而又无奈。',
  '秦观说:"日边清梦断，朱颜镜里改。春去也，飞红万点愁如海。"这样的愁太过凄厉。',
  '贺铸说:“试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨。"将无形的愁比作烟草、风絮与梅子雨三种具体的事物，情绪更饱满。很多人读到这几句，都会反复吟诵，细细品味这份朦胧而又柔美的愁苦。',
  '能写出这样婉约的词，其人必定是个白衣飘飘、潇洒俊朗的书生。但事实并非如此。史书中的贺铸是这样的:长身耸目，面色铁青，人称贺鬼头。如此描述实在让人不敢想像他真实的相貌:身长腿短，眉目竖立，皮肤黑青，让粉丝大失所望。',
  '不过，好在他的出身多少弥补了相貌的严重不足:',
  '贺铸，字方回，北宋中后期词人，系宋太祖贺皇后的第五代族孙。只是贺皇后死的太早，还没等赵匡胤登上皇帝宝座就病故，其子在赵光义继位后被迫自刎，贺家也逐渐失势。到贺铸这一辈时，家道已败落。',
  '不过，好呆祖上也是皇亲国戚，贺铸20岁时，朝廷恩赏，直接给其封了个右班殿值的官，负责监管皇宫的罕器库，开始了他的职业生涯。',
  '没有参加科举考试，走的又是武职系列，这在重文抑武的宋朝，自然得不到很好的发展。因此到40岁时，贺铸仍在军队中屈居下僚。',
  '有心栽花花不开，无心插柳柳成荫。一心想在战场上建功立业的贺铸，却无所作为，没料到写的诗词却在社会上引起了强烈的反响。后经李清臣、苏轼等大臣的奏请，朝廷将贺铸改为文职。',
  '由于其性格耿直、冲动，仕途也并不顺畅，终其一生，官职卑微。',
  '![](http://upload-images.jianshu.io/upload_images/2149802-386824ce2d52535e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)',
  '### 02.凄婉缠绵的贺词',
  '图片出自网络',
  '晚年的贺铸退居苏州横塘，潜心读书、写词。《青玉案》便是这时期的作品。',
  '> 凌波不过横塘路，但目送、芳尘去。锦瑟华年谁与度？月桥花院，琐窗朱户，只有春知处。 飞云冉冉蘅皋暮，彩笔新题断肠句。试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨。',
  '凌波指步态轻盈，在这代指美女。她飘然而止，出现在我的视野里，但并没有越过横塘，只好目送着她的倩影。这美好的春春年华啊，与谁一起度过呢?只好在月桥花院里，紧闭窗户，让春光陪伴着自己。',
  '暮云低垂，芳草连天。你问我的闲愁有多少?那就读读用彩笔写下的断肠句吧:它恰如一川烟草，满城风絮，梅子黄时雨。',
  '**芳草萋萋，无边无际，浸润在细细的雨丝里，朦朦胧胧，如烟如雾。柳絮飘飞，纷纷扰扰，好一幅凄迷唯美的景色! 作者以烟草、飞絮、梅子雨三个比喻将闲愁变得具体形象: 愁的时间之长如绵绵不绝的梅雨，久久难以消散; 愁的密度如满城飘飞的柳絮，搅得人心乱如麻; 愁的广度如一川烟草，无法排解。**',
  '若问世间闲愁为何物，读读贺铸的这三句便可知。难怪世人称他为"贺梅子"。历代词人中能将愁写得如此唯美深情，恐怕非贺铸莫属。',
  '除了这首《青玉案》，贺铸还有一首词也写得真挚凄婉。它就是为悼忘妻子而作的《鹧鸪天》:',
  '> 重过闾门万事非。同来何事不同归。梧桐半死清霜后，头白鸳鸯失伴飞。',
  '> 原上草，露初晞。旧栖新垅两依依。空床卧听南窗雨，谁复挑灯夜补衣。',
  '贺铸娶了赵氏宗族的女子为妻。赵氏虽出生于富贵之家，但并没有千金小姐常见的娇贵，嫁到贫困的夫家后，她勤劳贤惠，操持家务。贺铸在其诗作中也曾提到过妻子冬夜补衣的情形。',
  '这首词的写作背景是:贺铸退居苏州后，曾和赵氏居住在这儿，后来夫人病故。贺铸重过闾门，赌物思人，发出同来何事不同归的感慨。梧桐枯萎，鸳鸯失伴，清冷的景象正如他的心情。原野上的露水干了可以复落，而他再也见不到自己的妻子，只能一遍遍地在旧居与新坟间徘徊。晚上一个人躺在床上，听着窗外的雨声，又想起了妻子，有谁还会在夜晚为自己挑灯补衣呢?',
  '给自己的结发妻子写词，历史上这样的文人并不多见。又能把悼亡词写得如此深情朴实、感人肺腑，更是罕见。由此可见，贺铸应该是深爱着妻子的。后人评价它可以和苏轼的《江城子·十年生死两茫茫》相媲美。',
  '### 03.豪狭狂放的贺词',
  '![](http://upload-images.jianshu.io/upload_images/2149802-42e97ed2e3f6faa2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1080/q/50)',
  '贺铸的词呈现出两种截然不同的风格:婉约细腻与豪情狂放，这与南宋词人辛弃疾十分相像。《六州歌头》就是其豪狭狂放风格的代表作。',
  '> 少年侠气，交结五都雄。肝胆洞，毛发耸。立谈中，死生同。一诺千金重。推翘勇，矜豪纵。轻盖拥，联飞鞚，斗城东。轰饮酒垆，春色浮寒瓮，吸海垂虹。闲呼鹰嗾犬，白羽摘雕弓，狡穴俄空。乐匆匆。',
  '> 似黄粱梦，辞丹凤；明月共，漾孤蓬。官冗从，怀倥偬；落尘笼，簿书丛。鹖弁如云众，供粗用，忽奇功。笳鼓动，渔阳弄，思悲翁。不请长缨，系取天骄种，剑吼西风。恨登山临水，手寄七弦桐，目送归鸿。',
  '贺铸年少时不仅好读书，还喜欢习武。后来因家庭贫困没有参加科举，却因出身受了朝廷的恩荫，入了武职，也算是顺应了他的兴趣。青春少年时他血气方刚，侠肝义胆，结交英雄豪杰，一起开怀畅饮，纵马驰骋，追逐猎物，好不潇洒快活。',
  '后来，回想起这一切竟如同黄粱美梦，身在仕途牢笼，整日受人驱使，只能做些文书杂事，根本无法建功立业。当军鼓响起，战火点燃，可自己又年老体衰。请不动长缨，缚不住顽敌，宝剑空对西风吼。此恨难消，只能登山临水，手抚七弦情，目送天上的归鸿。',
  '词的上片热血沸腾，下片却悲愤无奈，但这两种情绪都表达地汗畅淋漓。',
  '**"不请长缨，系取天骄种，剑吼西风"的豪放狂狭与"一川烟草，满城风絮，梅子黄时雨"的细腻柔绵，在同一个词人身上出现，实在令人难以想象。而这又恰恰是贺词的风格。**',
  '**不过，对于贺铸，王国维曾毫不客气地评价到: "北宋名家，以方回为最次。"初闻此语，觉得太过尖刻，后来一想，能和照耀千年的词坛大家们同时一绝高下，贺铸虽败犹荣。**',
  '[转载链接](http://www.jianshu.com/p/a8d723c89d03)'
].join("\n\r");

// var htmlCodes2 = 
const bodyArr = [
  htmlCodes,
  htmlCodes2,
];
const tagArr = [
  '随感',
  '日记',
  'Code',
  '诗歌',
  'Psy',
  'ES6',
  'PS',
  'AI',
  'CDR',
  '配色',
  'UI',
  'UX',
  'Matarial Design',
  '规范',
  'Markdown',
  'PPT',
  '原型',
  'Logo',
];

const TopicArr = [
    'Workflow教程', 
    'Ps系列入门', 
    'HCI', 
    'chrome拓展推荐',
    'VPS 推荐',
    'AI教程',
    'CDR 教程',
  ];
console.log(imgList);

module.exports = (times) => {
  return _.times(times, (n) => {
    return {
      id: n,
      title: Math.random() > 0.5 ? '贺铸：试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨' : 'workflow教程',
      banner: imgList[faker.random.number(20)],
      body: Math.random() > 0.5 ? bodyArr[0] : bodyArr[1],
      // body: faker.lorem.paragraphs(20),
      summary: faker.lorem.paragraph(6),
      created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      avatar: faker.internet.avatar(),
      mark: faker.lorem.paragraphs(4),
      view_count: faker.random.number(100),
      topic: {
        id: n,
        title: TopicArr[faker.random.number(7)],
        banner: imgList[faker.random.number(20)],
        descrption: faker.lorem.lines(10),
        summary: faker.lorem.paragraph(6),
        created_at: faker.date.between(new Date(2017, 0, 1), new Date()),
      },
      tags: _.times(3, (n) => {
        return {
          id: n,
          title: tagArr[faker.random.number(17)],
          summary: faker.lorem.sentence(30),
        };
      }),
      // topic: topicSchema(1),
    };
  });
}