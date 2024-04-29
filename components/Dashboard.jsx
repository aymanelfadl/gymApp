import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import ProgressBar from './ProgressBar';

const AnalysisLogo = require('../assets/analyse.png');
const IncomeLogo = require('../assets/generous.png');
const CoinLogo = require('../assets/coin.png');
const UsersLogo = require('../assets/users.png');
const UserCountLogo = require('../assets/userIcon.png');
const DayLogo = require('../assets/day.png');
const WeekLogo = require('../assets/week.png');
const MonthLogo = require('../assets/month.png');
const NoMoneyLogo = require('../assets/nomoney.png');

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5E7EB' }}>
          <View style={{ backgroundColor: 'white', width: '80%', borderRadius: 20, padding: 20, marginTop: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={IncomeLogo} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3B82F6' }}>الدخل الإجمالي</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3B82F6' }}>{totalIncome}</Text>
                  <Image source={CoinLogo} style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 10 }} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <ProgressBar data={100} total={100} IconLogo={DayLogo} Date="هذا اليوم" />
              <ProgressBar data={50} total={100} IconLogo={WeekLogo} Date="هذا الأسبوع" />
              <ProgressBar data={20} total={100} IconLogo={MonthLogo} Date="هذا الشهر" />
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5E7EB' }}>
          <View style={{ backgroundColor: 'white', width: '80%', borderRadius: 20, padding: 20, marginTop: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={UsersLogo} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3B82F6' }}>إجمالي العملاء</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3B82F6' }}>{totalUsers}</Text>
                  <Image source={UserCountLogo} style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 10 }} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <ProgressBar data={0} total={100} Date="العملاء بدون دفع" MiniLogo={NoMoneyLogo} hasRedBorder={true} />
              <ProgressBar data={50} total={100} Date="عملاء اليوم" MiniLogo={UserCountLogo} />
              <ProgressBar data={20} total={100} Date="عملاء الأسبوع" MiniLogo={UserCountLogo} />
              <ProgressBar data={40} total={100} Date="عملاء الشهر" MiniLogo={UserCountLogo} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
