import FabaCommand from "fabalous-core/core/FabaCommand";
import {accountStore} from "../AccountStore";
import SignUpEvent from "../event/SignUpEvent";

export default class SignUpCommand extends FabaCommand {
  execute(event:SignUpEvent) {
    if (event.username === "" || event.password === "") {
      accountStore.signUp.error = true;
      return;
    }

    accountStore.signUp.error = false;
  }
}