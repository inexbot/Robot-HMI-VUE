<template>
  <div class="teach">
    <el-row>
      <el-col :span="12">
        <h2>当前位置</h2>
        <h3>坐标系</h3>
        {{this.coordinate}}
        {{this.pos}}
        <el-table :data="positionData">
          <el-table-column prop="axis" label="轴"></el-table-column>
          <el-table-column prop="value" label="值"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <h2>手动操作</h2>
        <el-button>伺服就绪</el-button>
        <el-button>伺服停止</el-button>
        <el-button>{{deadman}}</el-button>
        <div class="Opera">
          <div class="operaButton">
            <el-button @click="jiji">J1-</el-button>
            <el-button @click="SETJ() , updata()">J1+</el-button>
          </div>
          <div class="operaButton">
            <el-button>J2-</el-button>
            <el-button>J2+</el-button>
          </div>
          <div class="operaButton">
            <el-button>J3-</el-button>
            <el-button>J3+</el-button>
          </div>
          <div class="operaButton">
            <el-button>J4-</el-button>
            <el-button>J4+</el-button>
          </div>
          <div class="operaButton">
            <el-button>J5-</el-button>
            <el-button>J5+</el-button>
          </div>
          <div class="operaButton">
            <el-button>J6-</el-button>
            <el-button>J6+</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Teach",
  data() {
    return {
      coordinate: "关节",
      deadman: "上电",
      positionData: ''
    };
  },
  computed:{
    pos:function(){
      return this.$store.state.robotStatus.handleSpeed
    }
    
  },
  created() {
    this.positionData = [
        {
          axis: 1,
          value: this.pos[2]
        },
        {
          axis: 2,
          value: this.pos[3]
        },
        {
          axis: 3,
          value: this.pos[4]
        },
        {
          axis: 4,
          value: this.pos[5]
        },
        {
          axis: 5,
          value: this.pos[6]
        },
        {
          axis: 6,
          value: this.pos[7]
        }
      ]
  },
  mounted(){
    
  },
  methods: { 
    ...mapActions('robotStatus',['SETJ']),
    jiji(){
      console.log(this,this.robotStatus)
      this.$store.dispatch('SETJ')
      this.coordinate = "试试"
      // this.updata()
    },
    // updata(){
    // this.$forceUpdate()
    // }
   }
};
</script>
<style>
.operaButton {
  display: flex;
  flex-flow: row;
}
</style>
