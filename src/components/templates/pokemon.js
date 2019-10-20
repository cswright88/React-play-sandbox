import React from 'react';
import {GetPokemon} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

function pokemonCard(pokemon, classes) {
    if (pokemon !== "") {
        let pokemonImage = String(pokemon.sprites.front_default);
        let pokemonTitle = String(pokemon.species.name);
        return (
            <div>
                {/*eventually this is the pokemon card*/}
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={pokemonImage}
                            title={pokemonTitle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {pokemonTitle}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Desc of pokemon goes here
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    } else {
        return "";
    }
};

function Pokemon() {
    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [pokemonNumber, setValues] = React.useState({
        name: 'pokemonNumber',
        pokemonNumber: '',
        multiline: 'Controlled',
    });
    const handleChange = name => event => {
        setValues({...pokemonNumber, [name]: event.target.value});
    };

    return (
        <div className="header">
            <h1>Pokemon</h1>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-number"
                    label={pokemonNumber.name}
                    value={pokemonNumber.pokemonNumber}
                    onChange={handleChange('pokemonNumber')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </form>

            <button onClick={() => dispatch(GetPokemon(pokemonNumber.pokemonNumber))}>
                Get Users Example API Call
            </button>
            {pokemonCard(pokemon, classes)}
        </div>
    );
}

export default Pokemon;