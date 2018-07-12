import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {withStyles} from "material-ui";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap:'no-wrap',
        marginTop: "80px"
    },
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap:'no-wrap'
    }
});

const Filter = props => {
    const {classes} = props;
    const tagsList = props.tags.map(element => {
        return (
            <MenuItem key={element.id} value={element.id}>
                {element.name}
            </MenuItem>
        );
    });
    return (
        <div className={classes.container}>
            <FormControl className={classes.formControl}>
                <Select
                    value={props.selectTag}
                    onChange={props.handleChange}
                    displayEmpty
                    name="tagForFilter"
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {tagsList}
                </Select>
                <Button onClick={props.dispatchAddTagForFilter}>Filter
                </Button>
            </FormControl>
        </div>
    );
};

export default withStyles(styles)(Filter);
