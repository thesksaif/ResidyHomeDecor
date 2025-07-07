import React from 'react';
import { Box, Card, CardMedia, Link, Grid } from '@mui/material';
import SectionHeader from 'ui-component/SectionHeader';

const inspirationData = [
  {
    label: 'Living Room',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Master Bedroom',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'False Ceiling',
    image:
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Homes by Livspace',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Kitchen',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Wardrobe',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
];

const InspirationSection = () => {
  return (
    <Box
      sx={{ width: '100%', py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}
    >
      <Box
        sx={{
          maxWidth: 1300,
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 0 },
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <SectionHeader
            heading="Inspiration for home interior designs"
            subheading="Give your home a new look with these interior design ideas curated for you"
          />
        </Box>
        <Link
          href="#"
          underline="none"
          sx={{ color: '#dc3545', fontWeight: 600, fontSize: '1.1rem' }}
        >
          View All &nbsp; &rarr;
        </Link>
      </Box>
      <Box sx={{ maxWidth: 1300, mx: 'auto', px: { xs: 2, sm: 3, md: 0 } }}>
        <Grid container spacing={2}>
          {/* Top row */}
          {inspirationData.slice(0, 3).map((item) => (
            <Grid item xs={12} sm={4} key={item.label}>
              <Card
                sx={{
                  width: '100%',
                  height: { xs: 220, sm: 260, md: 260 },
                  borderRadius: 4,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.label}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 12,
                    bottom: 12,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    borderRadius: 2,
                    px: 2,
                    py: 0.5,
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: '1rem',
                    zIndex: 2,
                  }}
                >
                  {item.label}
                </Box>
              </Card>
            </Grid>
          ))}
          {/* Bottom row */}
          {inspirationData.slice(3).map((item) => (
            <Grid item xs={12} sm={4} key={item.label}>
              <Card
                sx={{
                  width: '100%',
                  height: { xs: 180, sm: 200, md: 200 },
                  borderRadius: 4,
                  boxShadow: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.label}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 12,
                    bottom: 12,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    borderRadius: 2,
                    px: 2,
                    py: 0.5,
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: '1rem',
                    zIndex: 2,
                  }}
                >
                  {item.label}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InspirationSection;
