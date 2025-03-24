import { Box, Typography, Stack, Grid } from '@mui/material'
import icon from '../../assets/bot.png'
import Card from './Card'

export default function InitialChat({ generateResponse }) {

    const initialData = [
        {
            heading: 'Jeans',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Smartphone',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Laptop',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'T-Shirt',
            subtext: 'Get immediate AI generated response'
        },
    ]


    return (
        <Stack height={1} justifyContent={'flex-end'} p={{ xs: 2, md: 3 }}>
            <Stack
                alignItems={'center'}
                spacing={2}
                my={5}
            >
                <Typography variant='h2'>
                    Hi, Please tell me what you want?
                </Typography>
                <Box
                    component={'img'}
                    src={icon}
                    height={{ xs: 42, md: 70 }}
                    width={{ xs: 42, md: 70 }}
                    boxShadow={4}
                    borderRadius={'50%'}
                />
            </Stack>
            <Grid container spacing={{ xs: 1, md: 3 }}>
                {initialData.map(item => (
                    <Grid item key={item.heading} xs={12} md={6}>
                        <Card heading={item.heading} subtext={item.subtext} handleClick={generateResponse} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}