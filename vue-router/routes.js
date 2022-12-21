import Vue from "vue";
import VueRouter from "vue-router";
import NumberBaseball from "../NumberBaseball/NumberBaseball";
import ReactionCheck from "../ReactionCheck/ReactionCheck";
import RockSissorPaper from "../RockSissorPaper/RockSissorPaper";
import LottoGenerator from "../LottoGenerator/LottoGenerator";
import TicTacToe from "../Tic-tac-toe/TicTacToe";
import MineSweeper from "../MineSweeper/MineSweeper";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/number-baseball", component: NumberBaseball },
    { path: "/reaction-check", component: ReactionCheck },
    { path: "/rock-sissor-paper", component: RockSissorPaper },
    { path: "/lotto-generator", component: LottoGenerator },
    { path: "/tic-tac-toe", component: TicTacToe },
    { path: "/mine-sweeper", component: MineSweeper },
  ],
});
