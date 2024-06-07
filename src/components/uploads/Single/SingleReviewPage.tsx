import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  CardHeader,
  Avatar,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// Mock Data
const mockData = {
  tracks: {
    contentType: "Audio",
    primaryTrackType: "Music",
    secondaryTrackType: "Original",
    instrumental: "No",
    title: "Sample Track",
    remixer: "Sample Remixer",
    author: "Sample Author",
    composer: "Sample Composer",
    arranger: "Sample Arranger",
    producer: "Sample Producer",
    pLine: "Sample ℗ Line",
    productionYear: "2023",
    publisher: "Sample Publisher",
    isrc: "Sample ISRC",
    askToGenerateIsrc: "No",
    price: "10.99",
    producerCatalogueNumber: "Sample Catalogue Number",
    parentalAdvisory: "No",
    previewStart: "00:00",
    trackTitleLanguage: "English",
    lyricsLanguage: "English",
    lyrics: "Sample Lyrics",
  },
  release: {
    releaseTitle: "Sample Release",
    versionSubtitle: "Sample Version",
    primaryArtists: ["Sample Artist 1"],
    featuringArtists: ["Sample Artist 2"],
    variousArtistsCompilation: false,
    genre: "Rock",
    subgenre: "Classic Rock",
    labelName: "Sample Label",
    format: "CD",
    physicalReleaseDate: "2023-01-01",
    pLine: "Sample Ⓟ Line",
    cLine: "Sample © Line",
    productionYear: "2023",
    upcEan: "Sample UPC/EAN",
    producerCatalogueNumber: "Sample Catalogue Number",
  },
  audio: {
    coverImage:
      "https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg",
    audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
};

const SingleTrackReviewPage = () => {
  const { tracks, release, audio } = mockData;

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader
          avatar={
            <Avatar aria-label="track">
              <PlayCircleOutlineIcon />
            </Avatar>
          }
          title={tracks.title}
          subheader={`${release.releaseTitle} - ${release.versionSubtitle}`}
          style={{ backgroundColor: "#f5f5f5" }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} style={{ padding: "10px" }}>
              <CardMedia
                component="img"
                image={audio.coverImage}
                alt={tracks.title}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} sm={8} style={{ padding: "10px" }}>
              <List style={{ width: "100%" }}>
                <ListItem>
                  <ListItemText
                    primary="Artists"
                    secondary={release.primaryArtists.join(", ")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Featuring Artists"
                    secondary={release.featuringArtists.join(", ")}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Genre"
                    secondary={`${release.genre} / ${release.subgenre}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Label" secondary={release.labelName} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Release Date"
                    secondary={release.physicalReleaseDate}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Price"
                    secondary={`$${tracks.price}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Producer"
                    secondary={tracks.producer}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Lyrics" secondary={tracks.lyrics} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Remixer" secondary={tracks.remixer} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Author" secondary={tracks.author} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Composer"
                    secondary={tracks.composer}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Arranger"
                    secondary={tracks.arranger}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="P Line" secondary={tracks.pLine} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Production Year"
                    secondary={tracks.productionYear}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Publisher"
                    secondary={tracks.publisher}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="ISRC" secondary={tracks.isrc} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Preview Start"
                    secondary={tracks.previewStart}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Track Title Language"
                    secondary={tracks.trackTitleLanguage}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Lyrics Language"
                    secondary={tracks.lyricsLanguage}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <audio controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={audio.audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ padding: "10px" }}>
              <Typography variant="body1">
                <strong>Content Type:</strong> {tracks.contentType}
              </Typography>
              <Typography variant="body1">
                <strong>Track Type:</strong> {tracks.primaryTrackType}
              </Typography>
              <Typography variant="body1">
                <strong>Instrumental:</strong> {tracks.instrumental}
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ padding: "10px" }}>
              <Typography variant="body1">
                <strong>ISRC:</strong> {tracks.isrc}
              </Typography>
              <Typography variant="body1">
                <strong>Catalogue Number:</strong>{" "}
                {tracks.producerCatalogueNumber}
              </Typography>
              <Typography variant="body1">
                <strong>Parental Advisory:</strong> {tracks.parentalAdvisory}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader
          title="Release Information"
          style={{ backgroundColor: "#f5f5f5" }}
        />
        <CardContent>
          <List style={{ width: "100%" }}>
            <ListItem>
              <ListItemText
                primary="Release Title"
                secondary={release.releaseTitle}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Version Subtitle"
                secondary={release.versionSubtitle}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Primary Artists"
                secondary={release.primaryArtists.join(", ")}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Featuring Artists"
                secondary={release.featuringArtists.join(", ")}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Various Artists Compilation"
                secondary={release.variousArtistsCompilation ? "Yes" : "No"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Genre"
                secondary={`${release.genre} / ${release.subgenre}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Label" secondary={release.labelName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Format" secondary={release.format} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Physical Release Date"
                secondary={release.physicalReleaseDate}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="P Line" secondary={release.pLine} />
            </ListItem>
            <ListItem>
              <ListItemText primary="C Line" secondary={release.cLine} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Production Year"
                secondary={release.productionYear}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="UPC/EAN" secondary={release.upcEan} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Producer Catalogue Number"
                secondary={release.producerCatalogueNumber}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleTrackReviewPage;
