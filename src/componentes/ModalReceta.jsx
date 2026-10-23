import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { IconoCerrar, IconoPorciones, IconoTiempo } from './Iconos'

export function ModalReceta({ receta, alCerrar }) {
  const estaAbierto = Boolean(receta)

  return (
    <Dialog
      open={estaAbierto}
      onClose={alCerrar}
      TransitionComponent={Grow}
      transitionDuration={220}
      aria-labelledby="tituloModalReceta"
      fullWidth
      maxWidth="sm"
    >
      {receta && (
        <>
          <DialogTitle id="tituloModalReceta">
            {receta.titulo}
            <IconButton
              aria-label="Cerrar receta"
              onClick={alCerrar}
              sx={{ position: 'absolute', right: 12, top: 12 }}
            >
              <IconoCerrar />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <IconoTiempo color="primary" fontSize="small" />
                <Typography variant="body2">{receta.tiempo}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <IconoPorciones color="primary" fontSize="small" />
                <Typography variant="body2">{receta.porciones}</Typography>
              </Box>
            </Stack>

            <Typography component="h3" variant="h6">
              Ingredientes
            </Typography>
            <ul className="listaIngredientes">
              {receta.ingredientes.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>

            <Typography component="h3" variant="h6" sx={{ mt: 3 }}>
              Preparación
            </Typography>
            <ol className="listaPasos">
              {receta.pasos.map((paso) => (
                <li key={paso}>{paso}</li>
              ))}
            </ol>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}
