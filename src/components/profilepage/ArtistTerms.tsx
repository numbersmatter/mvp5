import React from 'react';

import { 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText, 
  DialogActions
} from '@mui/material';


export interface ArtistTermsProps {
  terms: string,
}
export default function ArtistTerms(props: ArtistTermsProps) {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: {}, reason: "backdropClick"| "escapeKeyDown"| "buttonClick") => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
 /*  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement?.focus();
      }
    }
  }, [open]); */

  return (
    <div>
      <Button
        variant="outlined" 
        onClick={()=>handleClickOpen()}
      >
        Terms and Conditions
      </Button>
      
      <Dialog
        open={open}
        onClose={(event, reason) =>{ 
          if (reason !=='backdropClick'){handleClose(event, reason)}}}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Artist Terms and Conditions</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.terms}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose({},"buttonClick" )}} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}