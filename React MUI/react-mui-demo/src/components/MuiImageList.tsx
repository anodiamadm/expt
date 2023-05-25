import React from 'react'
import { Stack, ImageList, ImageListItem, ImageListItemBar, Box, IconButton } from '@mui/material'
import AodIcon from '@mui/icons-material/Aod';

const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} >
                {itemData.map((item) => (
                    <ImageListItem key={item.key}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                            alt={item.title}
                            loading='lazy'
                        />
                        <ImageListItemBar 
                            title={item.title} subtitle='lorem ipsum text goes here' position='top' 
                            actionIcon={<IconButton onClick={()=>alert('Image Button Clicked')}><AodIcon/></IconButton>}
                        />
                    </ImageListItem>     
                ))}
            </ImageList>

            <ImageList variant='woven' sx={{ width: 500, height: 450 }} cols={3} gap={8} >
                {itemData.map((item) => (
                    <ImageListItem key={item.key}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                            alt={item.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Box sx={{ width: 500, height: 450, overflowY:'scroll' }} >
                <ImageList variant='masonry' cols={3} gap={8} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.key}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                                alt={item.title}
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Stack>
    )
}

const itemData = [
    {
        key: 0,
        img: 'https://picsum.photos/200',
        title: 'My Image-1'
    },
    {
        key: 1,
        img: 'https://picsum.photos/201',
        title: 'My Image-2'
    },
    {
        key: 2,
        img: 'https://picsum.photos/202',
        title: 'My Image-3'
    },
    {
        key: 3,
        img: 'https://picsum.photos/203',
        title: 'My Image-4'
    },
    {
        key: 4,
        img: 'https://picsum.photos/204',
        title: 'My Image-5'
    },
    {
        key: 5,
        img: 'https://picsum.photos/205',
        title: 'My Image-6'
    },
    {
        key: 6,
        img: 'https://picsum.photos/206',
        title: 'My Image-7'
    },
    {
        key: 7,
        img: 'https://picsum.photos/207',
        title: 'My Image-8'
    },
    {
        key: 8,
        img: 'https://picsum.photos/208',
        title: 'My Image-9'
    },
    {
        key: 9,
        img: 'https://picsum.photos/209',
        title: 'My Image-10'
    },
    {
        key: 10,
        img: 'https://picsum.photos/210',
        title: 'My Image-11'
    },
    {
        key: 11,
        img: 'https://picsum.photos/211',
        title: 'My Image-12'
    },
    {
        key: 12,
        img: 'https://picsum.photos/212',
        title: 'My Image-13'
    },
    {
        key: 13,
        img: 'https://picsum.photos/213',
        title: 'My Image-14'
    },
    {
        key: 14,
        img: 'https://picsum.photos/214',
        title: 'My Image-15'
    },
    {
        key: 15,
        img: 'https://picsum.photos/215',
        title: 'My Image-16'
    }
]

export default MuiImageList