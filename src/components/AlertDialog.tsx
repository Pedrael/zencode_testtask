import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import DeleteIcon from '@mui/icons-material/Delete'
import { white } from '../constants'

interface AlertDialogProps {
  handleOpen: boolean
  handleConfirm: Function
  handleCancel: Function
  title: string
  description: string
}

export const AlertDialog = ({
  handleOpen,
  handleConfirm,
  handleCancel,
  title,
  description,
}: AlertDialogProps) => {
  const { t } = useTranslation()

  const handleClickConfirm = () => {
    handleConfirm()
  }
  const handleClickCancel = () => {
    handleCancel()
  }

  return (
    <Dialog
      open={handleOpen}
      onClose={handleClickConfirm}
      onAbort={handleClickCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickCancel} variant="text">
          {t('disagree')}
        </Button>
        <Button
          onClick={handleClickConfirm}
          variant="contained"
          startIcon={<DeleteIcon />}
          sx={{
            color: `${white}`,
          }}
        >
          {t('agree')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
