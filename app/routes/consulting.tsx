import {Grid} from "@mui/system";
import {GridItem} from "~/grid-item/grid-item";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router";

export default function Consulting() {
    return (
        <Grid container>
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Software Development Consulting
                    </Typography>
                    <Typography variant="body1">
                        Leverage over 12 years of full stack development experience specializing in React, Angular,
                        NodeJS, and ASP.NET. Whether you need custom web applications, code reviews, or performance
                        optimizations, I’m here to help your projects succeed.
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom mt={4}>
                        Introductory Rate: $50/hour
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={4}>
                        For a limited time, I’m offering an introductory rate of <strong>$50/hour</strong>. Get
                        high-quality consulting services at an unbeatable price.
                    </Typography>
                    <Link to={'/contact'}>
                        <Button variant="contained" color="primary" size="large" style={{marginTop: 15}}>
                            Contact Me
                        </Button>
                    </Link>

                    <Typography variant="h6" color="primary" mt={4}>
                        Don’t miss out on this limited-time rate! Reach out today to discuss your project needs.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}