import React, { useState } from 'react';
import { Button, Checkbox, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography, Card, CardContent, Switch } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

export interface ToDoItem {
    description: string;
    isCompleted: boolean;
}

const initialToDoItems: ToDoItem[] = [
    { description: 'Write Code', isCompleted: true },
    { description: 'Drink coffee ☕', isCompleted: false },
    { description: 'Write more code 👨‍💻', isCompleted: false },
    { description: 'Finish Project 😀🎉', isCompleted: false },
];

const ToDoList: React.FunctionComponent = () => {
    const [toDoItems, setToDoItems] = useState<ToDoItem[]>(initialToDoItems);
    const [description, setDescription] = useState<string>('');
    const [showCompleted, setShowCompleted] = useState<boolean>(true);

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleAddClick = () => {
        setToDoItems((prevState) => [{ description: description, isCompleted: false }, ...prevState]);
        setDescription('');
    };

    const handleShowCompletedChange = () => setShowCompleted((prevState) => !prevState);

    const handleCheckboxClick = (key: number) => {
        setToDoItems((prevState) => prevState.map((toDoItem, index) => {
            return index === key ? { ...toDoItem, isCompleted: !toDoItem.isCompleted } : toDoItem;
        }));
    };

    const handleDeleteClick = (key: number) => {
        setToDoItems((prevState) => prevState.filter((toDoItem, index) => index !== key));
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant='h4'>To Do List</Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            id='description'
                            label='Description'
                            onChange={handleDescriptionChange}
                            value={description}
                            fullWidth
                            required 
                        />
                    </Grid>

                    <Grid item container spacing={1} alignItems='center' justifyContent='space-between'>
                        <Grid item>
                            <Button 
                                variant="contained"
                                disabled={description.length === 0}
                                onClick={handleAddClick}
                            >
                                Add
                            </Button>
                        </Grid>

                        <Grid item>
                            <Grid container spacing={1} alignItems='center'>
                                <Grid item>
                                    <Switch 
                                        checked={showCompleted}
                                        onChange={handleShowCompletedChange}
                                        inputProps={{ 'aria-label': 'Show Completed' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant='body2'>Show Completed</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <List sx={{ bgcolor: 'background.paper' }}>
                            {toDoItems
                                .filter((reminder) => {
                                    return showCompleted ? true : !showCompleted && !reminder.isCompleted
                                })
                                .map((reminder, key) => {
                                    const labelId = `checkbox-list-label-${reminder.description}`;

                                    return (
                                        <ListItem 
                                            key={`${reminder.description}-${key}`} 
                                            disablePadding
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(key)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                            disabled={reminder.isCompleted}
                                        >
                                            <ListItemButton role={undefined} dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                        onClick={() => handleCheckboxClick(key)}
                                                        checked={reminder.isCompleted}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    id={labelId} 
                                                    primary={reminder.description} 
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
    );
}

export default ToDoList;