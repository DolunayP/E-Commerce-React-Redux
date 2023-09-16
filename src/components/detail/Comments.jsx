import React from "react";
import { Avatar, Grid, Divider, Paper, Rating } from "@mui/material";

const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Comments = () => {
    return (
        <div className="mt-16 p-3 mx-auto w-11/12">
            <h2 className="text-3xl font-bold mb-8">Kullanıcı Yorumları</h2>
            <Paper className="pt-8 px-5">
                <Grid container wrap="nowrap" spacing={4}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 className="text-left"> Dolunay Pazarcı</h4>
                        <Rating className="my-1" readOnly value={3.4} precision={0.5} />
                        <p className="pe-4 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                            Suspendisse congue vulputate lobortis. Pellentesque at interdum
                            tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                            sagittis ipsum. Aliquam ultricies a ligula nec faucibus.                        </p>
                        <p className="mt-2 text-right text-gray-600 " >
                            15.09.2023
                        </p>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </Paper>
        </div >
    );
}

export default Comments