import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IconoReceta } from './Iconos'

export function TarjetaReceta({ receta, alAbrir }) {
  return (
    <Card component="article" className="tarjetaReceta" elevation={0}>
      <CardMedia
        component="img"
        className="imagenReceta"
        image={receta.imagen}
        alt={receta.altImagen}
      />
      <CardContent className="contenidoTarjeta">
        <Typography component="h2" variant="h5">
          {receta.titulo}
        </Typography>
        <Typography className="textoTarjeta" component="p">
          {receta.descripcion}
        </Typography>
        <Button
          className="btnPop"
          variant="contained"
          color="primary"
          startIcon={<IconoReceta />}
          onClick={() => alAbrir(receta)}
        >
          Ver receta
        </Button>
      </CardContent>
    </Card>
  )
}
