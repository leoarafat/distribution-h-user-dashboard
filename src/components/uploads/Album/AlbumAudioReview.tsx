// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   CardMedia,
//   CardHeader,
//   Avatar,
// } from "@mui/material";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import { albumReleaseInformationData } from "@/MockData/MockData";

// const AlbumAudioReview = ({ data, onChange }: any) => {
//   const { tracks, release, audio } = albumReleaseInformationData;
//   const releaseInformation = data && data?.releaseInformation;
//   const audios = data && data?.audios;
//   console.log(releaseInformation, "releaseInformation");
//   console.log(audios, "Audios");
//   return (
//     <Container maxWidth="md" style={{ padding: "20px" }}>
//       <Card style={{ marginBottom: "20px" }}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="album">
//               <PlayCircleOutlineIcon />
//             </Avatar>
//           }
//           title="Album Summary"
//           style={{ backgroundColor: "#f5f5f5" }}
//         />
//         <CardContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4} style={{ padding: "10px" }}>
//               <CardMedia
//                 component="img"
//                 image={audio.coverImage}
//                 alt="Album Cover"
//                 style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={8} style={{ padding: "10px" }}>
//               <List style={{ width: "100%" }}>
//                 {tracks.map((song, index) => (
//                   <ListItem key={index} style={{ marginBottom: "20px" }}>
//                     <ListItemText
//                       primary={`${song.title} - ${song.version}`}
//                       secondary={
//                         <>
//                           <Typography variant="body2">
//                             <strong>Primary Artists:</strong>{" "}
//                             {song.primaryArtists.join(", ")}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Featuring Artists:</strong>{" "}
//                             {song.featuringArtists.join(", ")}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Writers:</strong> {song.writers.join(", ")}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Composers:</strong>{" "}
//                             {song.composers.join(", ")}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Directors:</strong>{" "}
//                             {song.directors.join(", ")}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Producers:</strong>{" "}
//                             {song.producers.join(", ")}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Genre:</strong> {song.genre}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Subgenre:</strong> {song.subgenre}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Label Name:</strong> {song.label}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Format:</strong> {song.format}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Release Date:</strong> {song.releaseDate}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Publisher:</strong> {song.publisher}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Language:</strong> {song.language}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Production Year:</strong>{" "}
//                             {song.productionYear}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>ISRC:</strong> {song.isrc}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Youtube URL:</strong> {song.youtube}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Lyrics:</strong> {song.lyrics}
//                           </Typography>
//                           <audio
//                             controls
//                             style={{ width: "100%", marginTop: "10px" }}
//                           >
//                             <source src={song.audioFile} type="audio/mpeg" />
//                             Your browser does not support the audio element.
//                           </audio>
//                         </>
//                       }
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//       <Card style={{ marginBottom: "20px" }}>
//         <CardHeader
//           title="Release Information"
//           style={{ backgroundColor: "#f5f5f5" }}
//         />
//         <CardContent>
//           <List style={{ width: "100%" }}>
//             <ListItem>
//               <ListItemText
//                 primary="Release Title"
//                 secondary={release.releaseTitle}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Version Subtitle"
//                 secondary={release.versionSubtitle}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Primary Artists"
//                 secondary={release.primaryArtists.join(", ")}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Featuring Artists"
//                 secondary={release.featuringArtists.join(", ")}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Various Artists Compilation"
//                 secondary={release.variousArtistsCompilation ? "Yes" : "No"}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Genre" secondary={release.genre} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Subgenre" secondary={release.subgenre} />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Label Name"
//                 secondary={release.labelName}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Format" secondary={release.format} />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Physical Release Date"
//                 secondary={release.physicalReleaseDate}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="P Line" secondary={release.pLine} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="C Line" secondary={release.cLine} />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Production Year"
//                 secondary={release.productionYear}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="UPC/EAN" secondary={release.upcEan} />
//             </ListItem>
//             <ListItem>
//               <ListItemText
//                 primary="Producer Catalogue Number"
//                 secondary={release.producerCatalogueNumber}
//               />
//             </ListItem>
//           </List>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default AlbumAudioReview;
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

const AlbumAudioReview = ({ data }: any) => {
  const releaseInformation = data?.releaseInformation || [];
  const audios = data?.audios || [];
  const coverImage = data?.coverImage?.coverImage;
  const createObjectURLSafe = (file: any) => {
    try {
      return URL.createObjectURL(file);
    } catch (error) {
      console.error("Failed to create object URL:", error);
      return null;
    }
  };

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
              {coverImage && (
                <CardMedia
                  component="img"
                  image={createObjectURLSafe(coverImage)}
                  alt="Album Cover"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              )}
            </Grid>

            <Grid item xs={12} sm={8} style={{ padding: "10px" }}>
              <List style={{ width: "100%" }}>
                {audios.map((audio, index) => (
                  <ListItem key={index} style={{ marginBottom: "20px" }}>
                    <ListItemText
                      primary={`${audio.title} - ${audio.version}`}
                      secondary={
                        <>
                          <Typography variant="body2">
                            <strong>Primary Artists:</strong>{" "}
                            {audio.primaryArtists.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Featuring Artists:</strong>{" "}
                            {audio.featuringArtists.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Writers:</strong> {audio.writers.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Composers:</strong>{" "}
                            {audio.composers.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Directors:</strong>{" "}
                            {audio.directors.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Producers:</strong>{" "}
                            {audio.producers.join(", ")}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Genre:</strong> {audio.genre}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Subgenre:</strong> {audio.subgenre}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Label Name:</strong> {audio.label}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Format:</strong> {audio.format}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Release Date:</strong> {audio.releaseDate}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Publisher:</strong> {audio.publisher}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Language:</strong> {audio.language}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Production Year:</strong>{" "}
                            {audio.productionYear}
                          </Typography>
                          <Typography variant="body2">
                            <strong>ISRC:</strong> {audio.isrc}
                          </Typography>
                          <Typography variant="body2">
                            <strong>YouTube URL:</strong> {audio.youtube}
                          </Typography>
                          <Typography variant="body2">
                            <strong>Lyrics:</strong> {audio.lyrics}
                          </Typography>
                          {audio.file && (
                            <audio
                              controls
                              style={{ width: "100%", marginTop: "10px" }}
                            >
                              <source
                                src={createObjectURLSafe(audio.file)}
                                type="audio/mpeg"
                              />
                              Your browser does not support the audio element.
                            </audio>
                          )}
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
                secondary={releaseInformation.releaseTitle}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Version Subtitle"
                secondary={releaseInformation.version}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Primary Artists"
                secondary={releaseInformation.primaryArtists.join(", ")}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Label Name"
                secondary={releaseInformation.label}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Physical Release Date"
                secondary={releaseInformation.physicalReleaseDate}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="P Line"
                secondary={releaseInformation.pLine}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="C Line"
                secondary={releaseInformation.cLine}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Production Year"
                secondary={releaseInformation.productionYear}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="UPC/EAN"
                secondary={releaseInformation.upcEan}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Producer Catalogue Number"
                secondary={releaseInformation.catalogNumber}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Store Release Date"
                secondary={releaseInformation.storeReleaseDate}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AlbumAudioReview;
