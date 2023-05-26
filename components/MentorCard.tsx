import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Box } from '@mui/material';


interface MentorCardProps {
    name: string,
    description: string,
    avatarUrl: string,
    experience: string,
    jobDescription: string,
    skills: string[]
}

const MentorCard = ({ name, description, avatarUrl, experience, jobDescription, skills }: MentorCardProps) => {
    return (
        <Card sx={{ backgroundColor: 'white', borderRadius: 8, boxShadow: 3, marginBottom: "30px", width: "50rem", display: "flex", justifyContent: "center" }}>
            <CardHeader
                sx={{ backgroundColor: "#f5d142", display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "center" }}
                avatar={<Avatar src={avatarUrl} style={{ width: 120, height: 110, marginLeft: 16, marginBottom: 50 }} />}
                title={
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                        {name}
                    </Typography>
                }
            />
            <CardContent>
                <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
                    {description}
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
                    <strong>Experience:</strong> {experience}
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
                    <strong>Job Description:</strong> {jobDescription}
                </Typography>
                <Typography variant="body1">
                    <strong>Skills:</strong> {skills.join(', ')}
                </Typography>
            </CardContent>
        </Card >
    );
}

export default MentorCard;
