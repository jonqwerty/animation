import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Skeleton} from 'moti/skeleton';
import Animated, {FadeIn, Layout} from 'react-native-reanimated';

export type ContactInfo = {
  name: string;
  email: string;
};

type ContactListItemProps = {
  contact?: ContactInfo | null;
};

const SkeletonCommonProps = {
  colorMode: 'light',
  transition: {
    type: 'timing',
    duration: 1500,
  },
  backgroundColor: '#D4D4D4',
} as const;

const ContactListItem: React.FC<ContactListItemProps> = ({contact}) => {
  return (
    <View style={styles.containerA}>
      {/* If contact == null -> list is loading */}
      <Skeleton.Group show={contact == null}>
        <Skeleton
          height={70}
          width={70}
          radius={'round'}
          {...SkeletonCommonProps}>
          {contact && (
            <Animated.View
              layout={Layout}
              entering={FadeIn.duration(1500)}
              style={styles.circleContainer}>
              <Text style={{fontSize: 25, color: 'white'}}>
                {contact.name?.[0]}
              </Text>
            </Animated.View>
          )}
        </Skeleton>
        <View style={{marginLeft: 15}}>
          <Skeleton height={30} width={'80%'} {...SkeletonCommonProps}>
            {contact && (
              <Animated.Text
                layout={Layout}
                entering={FadeIn.duration(1500)}
                style={{fontSize: 25}}>
                {contact.name}
              </Animated.Text>
            )}
          </Skeleton>
          <View style={{height: 5}} />
          <Skeleton height={25} width={'70%'} {...SkeletonCommonProps}>
            {contact && (
              <Animated.Text
                layout={Layout}
                entering={FadeIn.duration(1500)}
                style={{fontSize: 20}}>
                {contact.email}
              </Animated.Text>
            )}
          </Skeleton>
        </View>
      </Skeleton.Group>
    </View>
  );
};

const MotiSkeletoneScreen = () => {
  const [contacts, setContacts] = useState<ContactInfo[] | undefined>();

  const contactsPlaceholderList = useMemo(() => {
    return Array.from({length: 15}).map(_ => null);
  }, []);

  const fetchContacts = useCallback(async () => {
    setContacts(undefined);

    // fetch contacts from json placeholder
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // wait for 5000ms to simulate loading
    await new Promise(resolve => setTimeout(resolve, 5000));

    setContacts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts ?? contactsPlaceholderList}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#CED0CE',
              }}
            />
          );
        }}
        renderItem={({item, index}) => {
          return <ContactListItem contact={item} key={index} />;
        }}
      />
      <Pressable
        style={styles.floatingButton}
        onPress={() => {
          fetchContacts();
        }}></Pressable>
    </View>
  );
};

export default MotiSkeletoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  containerA: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 64,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 32,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: '#005CB7',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
