import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import WPicker from '../../component/wPicker_1'
interface WpickerStates {
  defaultProps1?: any
  defaultRegion1?: any
  options?: any,
  rangeVal?: any,
  defaultRegion?:any,
  defaultProps?:any,
  selectorList?:any
}
export default class Index extends Component<null, WpickerStates> {
  private WPicker: any;
  private WPicker2: any;
  private WPicker3: any;
  private WPicker4: any;
  private WPicker5: any;
  private WPicker6: any;
  private WPicker7: any;
  private WPicker8: any;
  constructor(props) {
    super(props);
    this.state = {
      defaultProps1: {
        label: "name",
        value: "id",
        children: "child"
      },
      defaultRegion1: ["120000", "120100", "120101", "12010102"],
      options: [
        {
          id: '110000',
          name: '北京市',
          child: [{
            id: "110100",
            name: "北京市",
            child: [{
              id: "110101",
              name: "东城区",
              child: [{
                id: "11010101",
                name: "小区1",
              }, {
                id: "11010102",
                name: "小区2",
              }]
            }, {
              id: "110102",
              name: "西城区",
              child: [{
                id: "11010101",
                name: "小区3",
              }, {
                id: "11010102",
                name: "小区4",
              }]
            }, {
              id: "110105",
              name: "朝阳区",
              child: [{
                id: "11010101",
                name: "小区5",
              }, {
                id: "11010102",
                name: "小区6",
              }]
            }, {
              id: "110106",
              name: "丰台区",
              child: [{
                id: "11010101",
                name: "小区7",
              }, {
                id: "11010102",
                name: "小区8",
              }]
            }, {
              id: "110107",
              name: "石景山区",
              child: [{
                id: "11010101",
                name: "小区9",
              }, {
                id: "11010102",
                name: "小区10",
              }]
            }, {
              id: "110108",
              name: "海淀区"
            }, {
              id: "110109",
              name: "门头沟区"
            }, {
              id: "110111",
              name: "房山区"
            }, {
              id: "110112",
              name: "通州区"
            }, {
              id: "110113",
              name: "顺义区"
            }, {
              id: "110114",
              name: "昌平区"
            }, {
              id: "110115",
              name: "大兴区"
            }, {
              id: "110116",
              name: "怀柔区"
            }, {
              id: "110117",
              name: "平谷区"
            }, {
              id: "110118",
              name: "密云区"
            }, {
              id: "110119",
              name: "延庆区"
            }]
          }]
        }, {
          id: '120000',
          name: '天津市',
          child: [{
            id: "120100",
            name: "天津市",
            child: [{
              id: "120101",
              name: "和平区",
              child: [{
                id: "12010101",
                name: "小区3",
              }, {
                id: "12010102",
                name: "小区4",
              }]
            }, {
              id: "120102",
              name: "河东区"
            }, {
              id: "120103",
              name: "河西区"
            }, {
              id: "120104",
              name: "南开区"
            }, {
              id: "120105",
              name: "河北区"
            }, {
              id: "120106",
              name: "红桥区"
            }, {
              id: "120110",
              name: "东丽区"
            }, {
              id: "120111",
              name: "西青区"
            }, {
              id: "120112",
              name: "津南区"
            }, {
              id: "120113",
              name: "北辰区"
            }, {
              id: "120114",
              name: "武清区"
            }, {
              id: "120115",
              name: "宝坻区"
            }, {
              id: "120116",
              name: "滨海新区"
            }, {
              id: "120117",
              name: "宁河区"
            }, {
              id: "120118",
              name: "静海区"
            }, {
              id: "120119",
              name: "蓟州区"
            }]
          }]
        }
      ],
      rangeVal: ['2018-12-12', '2020-04-02'],
      defaultRegion:["150000","150100","150103"],
      defaultProps:{
        label:"name",
        value:"id"
      },
      selectorList:[
        {
          name:"男",
          id:"1"
        },{
          name:"女",
          id:"2"
        }
      ]
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onConfirm = (type) => {
    console.log(type)
  }
  onRef = (ref) => {
    this.WPicker = ref;

  }
  onRef2 = (ref) => {
    this.WPicker2 = ref;
  }
  onRef3 = (ref) => {
    this.WPicker3 = ref;
  }
  onRef4 = (ref) => {
    this.WPicker4 = ref;
  }
  onRef5 = (ref) => {
    this.WPicker5 = ref;
  }
  onRef6 = (ref) => {
    this.WPicker6 = ref;
  }
  onRef7 = (ref) => {
    this.WPicker7 = ref;
  }
  onRef8 = (ref) => {
    this.WPicker8 = ref;
  }
  onCancel = () => {

  }
  openPicker = (i) => {
    switch (i) {
      case 1:
        this.WPicker.show();
        break;
      case 2:
        this.WPicker2.show();
        break;
      case 3:
        this.WPicker3.show();
        break;
      case 4:
        this.WPicker4.show();
        break;
      case 5:
        this.WPicker5.show();
        break;
      case 6:
        this.WPicker6.show();
        break;
      case 7:
        this.WPicker7.show();
        break;
      case 8:
        this.WPicker8.show();
        break;
    }

  }
  render() {
    const { defaultRegion1,
      defaultProps1,
      options,
      rangeVal,
      defaultRegion,
      defaultProps,
      selectorList } = this.state
    return (
      <View className='index'>
        <WPicker mode="date"
          startYear="2017"
          endYear="2029"
          value="2020-04-08 16:45:45"
          current={false}
          fields="second"
          confirm={this.onConfirm}
          cancel={this.onCancel}
          disabledAfter={false}
          onRef={this.onRef}></WPicker>
        <View onClick={() => { this.openPicker(1) }}>打开datePicker</View>
        <WPicker mode="half"
          startYear="2017"
          endYear="2029"
          value="2018-02-11 下午"
          current={true}
          confirm={this.onConfirm}
          cancel={this.onCancel}
          disabledAfter={false}
          onRef={this.onRef2}></WPicker>
        <View onClick={() => { this.openPicker(2) }}>打开halfPicker</View>
        <WPicker mode="linkage"
          value={defaultRegion1}
          options={options}
          level={4}
          defaultType="id"
          defaultProps={defaultProps1}
          confirm={this.onConfirm}
          cancel={this.onCancel}
          disabledAfter={false}
          onRef={this.onRef3}></WPicker>
        <View onClick={() => { this.openPicker(3) }}>打开linkagePicker</View>
        <WPicker mode="range"
          startYear="2017"
          endYear="2030"
          value={rangeVal}
          current={true}
          confirm={this.onConfirm}
          cancel={this.onCancel}
          onRef={this.onRef4}></WPicker>
        <View onClick={() => { this.openPicker(4) }}>打开rangePicker</View>
        <WPicker mode="region"
          value={defaultRegion}
          defaultType="value"
          hideArea={false}
          confirm={this.onConfirm}
          cancel={this.onCancel}
          onRef={this.onRef5}></WPicker>
        <View onClick={() => { this.openPicker(5) }}>打开regionPicker</View>
        <WPicker mode="selector"
          value="女"
          defaultType="name"
          defaultProps={defaultProps}
			    options={selectorList}
          confirm={this.onConfirm}
          cancel={this.onCancel}
          onRef={this.onRef6}></WPicker>
        <View onClick={() => { this.openPicker(6) }}>打开selectorPicker</View>
        <WPicker mode="shortTerm"
          value="2020-04-08 13:18:00"
          current={true}
          expand="60"
          confirm={this.onConfirm}
          cancel={this.onCancel}
          onRef={this.onRef7}></WPicker>
        <View onClick={() => { this.openPicker(7) }}>打开shorttermPicker</View>
        <WPicker mode="time"
          value="18:08:05"
          current={true}
			    second={false}
          confirm={this.onConfirm}
          cancel={this.onCancel}
          onRef={this.onRef8}></WPicker>
        <View onClick={() => { this.openPicker(8) }}>打开timePicker</View>
      </View>
    )
  }
}
