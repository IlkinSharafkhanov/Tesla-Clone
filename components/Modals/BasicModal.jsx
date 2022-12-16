import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import styles from "../../styles/Modals/Modal.module.scss"




export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={styles.styleForIcon} onClick={handleOpen}>
        <ChatIcon style={{ color: "black" }} />
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.style}>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="boxStart"
          >
            <span style={{ visibility: "hidden" }}>rena yuh</span>
            <Typography
              color="#393c41"
              letterSpacing="1.1px"
              paddingBottom="24px"
              variant="subtitle2"
              component="subtitle2"
            >
              Question Center
            </Typography>
            <CloseIcon
              onClick={() => handleClose()}
              style={{ cursor: "pointer", justifyContent: "flex-end" }}
            />
          </div>

          <Typography
            letterSpacing="1.2px"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            What can we help you with
          </Typography>
          <Typography
            color="#393c41"
            opacity="0.6"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Tell us more and our customer support team will help you find the
            answers
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "48px",
              rowGap: "12px",
            }}
            className="buttonsModal"
          >
            <button
              style={{
                cursor: "pointer",
                color: "#5c5E62",
                padding: "8px 24px",
                fontSize: "14px",
                borderRadius: "3px",
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.4)",
              }}
            >
              Help With Previous Purchases
            </button>
            <button
              style={{
                cursor: "pointer",
                color: "#5c5E62",
                padding: "8px 24px",
                fontSize: "14px",
                borderRadius: "3px",
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.4)",
              }}
            >
              Buying Tesla Products
            </button>
            <button
              style={{
                cursor: "pointer",
                color: "#5c5E62",
                padding: "8px 24px",
                fontSize: "14px",
                borderRadius: "3px",
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.4)",
              }}
            >
              Questions about delivery
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
