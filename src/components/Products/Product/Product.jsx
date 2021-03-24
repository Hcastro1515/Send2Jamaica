import React from "react";

import { Card, CardMedia, CardActions, Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

function Product() {
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media}
        title={product.name}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <Button>
              {product.price}
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
