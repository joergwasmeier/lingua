import {accountStore} from "../AccountStore";
import SignUpEvent from "../event/SignUpEvent";
import FabaCommand from "@fabalous/core/FabaCommand";

export default class SignUpCommand extends FabaCommand {
  execute(event:SignUpEvent) {
    if (event.username === "" || event.password === "") {
      accountStore.signUp.error = true;
      return;
    }

    accountStore.signUp.error = false;
  }
}