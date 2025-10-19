import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Images, hobbies} from '../../assets/images';



export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* profile section */}
      <View style={styles.profileSection}>
        <Text style={styles.profileText}>Profile</Text>
        <Image
          source={Images.profile}
          style={styles.profileImage}
        />
        <View style={styles.profileGlobalText}>
          <Text style={styles.name}>M. Fauzan Akrom</Text>
          <Text style={styles.classText}>XI RPL 5</Text>
          <Text style={styles.bio}>I like horse and coffee</Text>
        </View>
      </View>

      {/* Hobbies Section */}
      <View style={styles.hobbiesSection}>
        <Text style={styles.hobbiesTitle}>Hobbies</Text>
        <View style={styles.hobbyList}>
          {hobbies.map((hobby) => 
              <View key={hobby.id} style={styles.hobbyItem}>
                <Image
                  source={hobby.image}
                  style={styles.hobbyImage}
                />
                <Text style={styles.hobbyName}>{hobby.name}</Text>
              </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    backgroundColor: '#ffeaea',
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  profileGlobalText: {
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  }
  ,
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  classText: {
    fontSize: 16,
    color: '#ff4b4b',
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    color: '#222',
    marginTop: 10,
  },
  hobbiesSection: {
    padding: 20,
  },
  hobbiesTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000',
  },
  hobbyList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hobbyItem: {
    alignItems: 'center',
  },
  hobbyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ff5f5f',
    marginBottom: 5,
  },
  hobbyName: {
    fontSize: 13,
    color: '#000',
  },
});
