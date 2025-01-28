import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Lead Board</Text>

        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map((item, index) => (
            <View
              key={index}
              style={[styles.mainCard, index !== 1 && { marginTop: 20 }]}
            >
              <Image
                source={{
                  uri: "https://fastly.picsum.photos/id/433/4752/3168.jpg?hmac=Og-twcmaH_j-JNExl5FsJk1pFA7o3-F0qeOblQiJm4s",
                }}
                style={styles.mainCardImage}
                resizeMode="cover"
              />
              <Text style={styles.mainCardTitle}>Jayanta</Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerText}>{item}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <FlatList
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardDataContainer}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Image
                  source={{
                    uri: "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
                  }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <Text style={styles.cardTitle}>Jayanta biswas</Text>
              </View>

              <View style={styles.cardRankContainer}>
                <Text style={styles.cardRankTitle}>35,526</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272c35",
  },
  topContainer: {
    backgroundColor: "#1a1f25",
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    gap: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  mainCard: {
    backgroundColor: "#272c35",
    padding: 18,
    alignItems: "center",
    borderRadius: 20,
    gap: 15,
    height: 170,
  },
  mainCardImage: {
    width: 70,
    height: 84,
    borderRadius: 10,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    position: "absolute",
    bottom: -15,
  },
  mainCardRankContainerText: {
    color: "white",
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardIndex: {
    color: "white",
  },
  cardImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 16,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: "orange",
  },
});
