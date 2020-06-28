
  const state= {
    robotAmount: 1,
    operaMode: 0,
    currentRobot: 1,
    currentRobotType: 1,
    /* ROBOT_TYPE:{  
    R_NULL = 0,
    R_GENERAL_6S = 1,
    R_SCARA = 2,
    R_FOURAXIS_PALLET = 3,
    R_FOURAXIS = 4,  
    R_GENERAL_1S = 5,
    R_GENERAL_5S = 6,
    R_GENERAL_6S_1 = 7,
    R_SCARA_TWOAXIS = 8,
    R_SCARA_THREEAXIS = 9,
    R_THREE_CARTESIAN_COORDINATE = 10,
    R_THREE_CARTESIAN_COORDINATE_1 = 11,
    R_FOUR_CARTESIAN_COORDINATE = 12,
  }; */
    multiRobotMode: 0,
    currentRobotServoState: 0,
    deadmanState: 0,
    currentRobotRunningState: 0,
    handleSpeed: 1,
    runningSpeed: 1,
    currentUser: 1,
    currentTool: 1,
    currentCoordinate: 0,
    currentForwardOrBackward: false,
    pos: [
      2,
      1,
      111.11,
      222.22,
      333.33,
      444.44,
      555.55,
      666.66,
      777.77,
      888.88,
      999,
      99,
      0,
      0,
      0,
    ],
    deg: 0,
    posDeg: [0, 0, 0, 0, 0, 0, 0],
    robot1OuterAmount: "0",
    robot2OuterAmount: "1",
    robot3OuterAmount: "2",
    // robot4OuterAmount: "3",
    outerActivedRobot: "robot1",
    outerActivedOuter: "转台1",
    count: 2,
    index: 3,
    robot1OpenedProgram: false,
    robot1CurrentProgram: "",
    robot2OpenedProgram: false,
    robot2CurrentProgram: "",
    robot3OpenedProgram: false,
    robot3CurrentProgram: "",
    robot4OpenedProgram: false,
    robot4CurrentProgram: "",
  }
  
 const mutations={
    SETJOINT(state) {
      let i = state.pos[2]
      i++
      state.pos.splice(2,1,i)

      console.log(state.pos[2])
    },
  }
  const getters = {
    posG: state => state.pos
  }
  const actions ={
    SETJ({commit}){
      commit('SETJOINT');
    }
  }
export default{
  state,
  getters,
  actions,
  mutations
}