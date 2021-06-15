import { useState } from "react";
import { Form, FormGroup, Col, Input, Container } from "reactstrap";
import { actions } from "../store/action";
import { useAppDispatch } from "../store/hook";
import style from '../styles/Started.module.css';

export const Started = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const submit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (input != "")dispatch(actions.link.submitLink(input));
    setInput("");
  } 

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className={style.body}>
      <div className={style.background}>
        <Container id="startId">
          <Form className={style.form} onSubmit={submit}>
            <FormGroup check row className={style["form-box"]}>
              <Col sm={8}>
                <Input 
                  onChange={handleInput}
                  type="text"
                  name="url"
                  placeholder="Shorten a link here..."
                ></Input>
              </Col>
              <Col sm={2}>
                <Input type="submit" name="submit" className={style.button} value="Submit"></Input>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </div>
    </div>
  );
}