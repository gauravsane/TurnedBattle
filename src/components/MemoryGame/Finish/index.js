import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";

const Finish = ({ handleRestart, showModal, bestScore, moves }) => {
  return (
    <div>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <br></br>
        <h3>Memory Game</h3>
        <DialogTitle id="alert-dialog-title">
          <h5>Hurray !!! You completed the game !!</h5>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h4>You got {moves} moves.Your best score is {bestScore}</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
