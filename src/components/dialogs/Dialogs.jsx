import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import {required, maxLength} from "../../reduxFormValidation/validation"
import {DialogFormValid} from "../../reduxFormValidation/validationFormStyles";


const Dialogs = (props) => {

  let onButton = (values) => {
    props.onButton(values.dialogArea);
    values.dialogArea=""
  };

  let dialogsEl = props.dialogsPage.dialogData.map((el) => (
    <DialogItem name={el.name} key={el.id} />
  ));
  let messagesEl = props.dialogsPage.messageData.map((el) => (
    <Message message={el.message} key={el.id} from={el.from} />
  ));

  return (
    <div className={s.dialogs}>
      <h2 className={s.dialogs_cap}>Dialogs</h2>
      <div className={s.dialogs_blocks}>
        <div className={s.dialogs_names}>{dialogsEl}</div>
        <div className={s.dialogs_messages}>{messagesEl}</div>
      </div>
      <DialogFormRedux onSubmit={onButton} />
    </div>
  );
};

let max = maxLength(10);

let dialogForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={DialogFormValid} name="dialogArea" validate={[required, max]} />
      </div>
      <button type="submit">Add Message</button>
    </form>
  );
};
let DialogFormRedux = reduxForm({
  form: "dialogForm",
})(dialogForm);

export default Dialogs;
