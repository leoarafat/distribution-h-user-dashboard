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

// Mock data
const releaseInformationData = {
  tracks: [
    {
      title: "Mock Song 1",
      version: "Mock Version 1",
      primaryArtists: ["Mock Artist 1", "Artist 2"],
      featuringArtists: ["Mock Featuring Artist 1"],
      writers: ["Mock Writer 1"],
      composers: ["Mock Composer 1"],
      directors: ["Mock Director 1"],
      producers: ["Mock Producer 1"],
      genre: "Mock Genre 1",
      subgenre: "Mock Subgenre 1",
      label: "Mock Label 1",
      format: "Mock Format 1",
      releaseDate: "2022-01-01",
      publisher: "Mock Publisher 1",
      language: "Mock Language 1",
      productionYear: "2022",
      isrc: "Mock ISRC 1",
      youtube: "Mock Youtube URL 1",
      lyrics: "Mock Lyrics 1",
      price: "Mock Price 1",
      producer: "Mock Producer 1",
      remixer: "Mock Remixer 1",
      author: "Mock Author 1",
      arranger: "Mock Arranger 1",
      pLine: "Mock P Line 1",
      audioFile:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      instrumental: "Yes",
      contentType: "Mock Content Type 1",
      primaryTrackType: "Mock Primary Track Type 1",
      parentalAdvisory: "Yes",
      trackTitleLanguage: "English",
      lyricsLanguage: "English",
      previewStart: "0:00",
    },
    {
      title: "Mock Song 2",
      version: "Mock Version 2",
      primaryArtists: ["Mock Artist 2"],
      featuringArtists: ["Mock Featuring Artist 2"],
      writers: ["Mock Writer 2"],
      composers: ["Mock Composer 2"],
      directors: ["Mock Director 2"],
      producers: ["Mock Producer 2"],
      genre: "Mock Genre 2",
      subgenre: "Mock Subgenre 2",
      label: "Mock Label 2",
      format: "Mock Format 2",
      releaseDate: "2022-02-02",
      publisher: "Mock Publisher 2",
      language: "Mock Language 2",
      productionYear: "2023",
      isrc: "Mock ISRC 2",
      youtube: "Mock Youtube URL 2",
      lyrics: "Mock Lyrics 2",
      price: "Mock Price 2",
      producer: "Mock Producer 2",
      remixer: "Mock Remixer 2",
      author: "Mock Author 2",
      arranger: "Mock Arranger 2",
      pLine: "Mock P Line 2",
      audioFile:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      instrumental: "No",
      contentType: "Mock Content Type 2",
      primaryTrackType: "Mock Primary Track Type 2",
      parentalAdvisory: "No",
      trackTitleLanguage: "Spanish",
      lyricsLanguage: "Spanish",
      previewStart: "0:30",
    },
  ],
  release: {
    releaseTitle: "Mock Album Title",
    versionSubtitle: "Mock Version Subtitle",
    primaryArtists: ["Mock Primary Artist"],
    featuringArtists: ["Mock Featuring Artist"],
    variousArtistsCompilation: false,
    genre: "Mock Genre",
    subgenre: "Mock Subgenre",
    labelName: "Mock Label Name",
    format: "Mock Format",
    physicalReleaseDate: "2022-01-01",
    pLine: "Mock P Line",
    cLine: "Mock C Line",
    productionYear: "2022",
    upcEan: "Mock UPC/EAN",
    producerCatalogueNumber: "Mock Producer Catalogue Number",
  },
  audio: {
    coverImage:
      "https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-513809-1323206.jpg&fm=jpg",
  },
};

const AlbumAudioReview = () => {
  const { tracks, release, audio } = releaseInformationData;

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <Card style={{ marginBottom: "20px" }}>
        <CardHeader
          avatar={
            <Avatar aria-label="album">
              <PlayCircleOutlineIcon />
            </Avatar>
          }
          title="Album Summary"
          style={{ backgroundColor: "#f5f5f5" }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} style={{ padding: "10px" }}>
              <CardMedia
                component="img"
                image={audio.coverImage}
                alt="Album Cover"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} sm={8} style={{ padding: "10px" }}>
              <List style={{ width: "100%" }}>
                {tracks.map((song, index) => (
                  <ListItem key={index} style={{ marginBottom: "20px" }}>
                    <ListItemText
                      primary={`${song.title} - ${song.version}`}
                      secondary={
                        <>
                          <Typography variant="body2">
                            <strong>Primary Artists:</strong>{" "}
                            {song.primaryArtists.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Featuring Artists:</strong>{" "}
                            {song.featuringArtists.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Writers:</strong> {song.writers.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Composers:</strong>{" "}
                            {song.composers.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Directors:</strong>{" "}
                            {song.directors.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Producers:</strong>{" "}
                            {song.producers.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Genre:</strong> {song.genre}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Subgenre:</strong> {song.subgenre}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Label Name:</strong> {song.label}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Format:</strong> {song.format}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Release Date:</strong> {song.releaseDate}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Publisher:</strong> {song.publisher}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Language:</strong> {song.language}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Production Year:</strong>{" "}
                            {song.productionYear}
                          </Typography>
                          <Typography variant="body2">
                            <strong>ISRC:</strong> {song.isrc}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Youtube URL:</strong> {song.youtube}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Lyrics:</strong> {song.lyrics}
                          </Typography>
                          <audio
                            controls
                            style={{ width: "100%", marginTop: "10px" }}
                          >
                            <source src={song.audioFile} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
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
              <ListItemText primary="Genre" secondary={release.genre} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Subgenre" secondary={release.subgenre} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Label Name"
                secondary={release.labelName}
              />
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

export default AlbumAudioReview;
