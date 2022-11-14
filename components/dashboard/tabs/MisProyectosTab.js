// MUI
import { Paper, Box, Typography, Divider } from "@mui/material"

// Icons
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

// other
import Router from "next/router";
import { motion } from "framer-motion"


// <-----------------------------------------> //

function MisProyectosTab({project_title, project_caption, prompt, project_id, icon}) {

  function handleClick(e) {
    e.preventDefault()
    Router.push(`/proyectos/${project_id}`)
  } 

  return (
    <>
    <Paper
        elevation={3}
        sx={{
            m: {lg: '0.4rem', xs: '1.5rem 0'},
            p: '1rem',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            height: {lg: '12rem', xs: '12rem'},
            // maxHeight: '12rem',
            overflow: {lg: 'scroll', xs: 'hidden'}
        }}
        onClick={handleClick}
        component={motion.div}
        whileHover={{ scale: 1.05 }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >   
            <Box
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mr: '0.5rem' }}
            >
                <HistoryEduIcon fontSize='large'/>
                {/* {icon} */}
            </Box>
            <Box
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
                <Typography variant='subtitle1' sx={{lineHeight: 1, mb: '0.25rem'}}>{project_title}</Typography>
                <Typography variant='caption'>{project_caption}</Typography>
            </Box>
            
        </Box>
        <Divider sx={{my: '0.5rem'}}/>
        <Box>
                <Typography variant='body2'>{prompt}</Typography>
        </Box>
    </Paper>
    </>
  )
}

export default MisProyectosTab