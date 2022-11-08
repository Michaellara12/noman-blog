import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

export default function deleteProject({handleClickOpenDelete}) {
    return (
        <div>
          <Dialog open={true} onClose={handleCloseDelete}>
          <DialogTitle>¿De verdad quieres eliminar este proyecto?</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Una vez elimines este proyecto no va a ser posible recuperarlo en el futuro
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDelete}>Cancelar</Button>
            <Button variant='contained'>Guardar</Button>
          </DialogActions>
        </Dialog>
        </div>
    );
  }