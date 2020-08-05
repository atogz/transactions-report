<template>
    <main id="report">
        <div v-if="loading">
            <Loader/>
        </div>
        <transition name="component-fade" mode="out-in">
            <div v-if="!loading && transactions.length">
                <div v-for="(day, index) in transactions" :key="index">
                    <div> {{ date(day.date) }}</div>
                    <ul>
                        <li v-for="(transaction, index) in day.transactions" :key="index">
                            <Transaction :transactionData="transaction"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else-if="!loading && !transactions.length">
                No transactions found.
            </div>
        </transition>
    </main>

</template>

<script>
  import Loader from "../components/Loader";
  import Transaction from "../components/Transaction";
  export default {
    name: "Report",
    components: {
      Loader,
      Transaction
    },
    data() {
      return {
        loading: true,
        transactions: [],
      }
    },
    methods: {
      date(date) {
        let today = this.$moment().format('DD.MM.YY');
        let yesterday = this.$moment().subtract(1, 'day').format('DD.MM.YY');
        return today === this.$moment(date).format('DD.MM.YY') ? "Сегодня" :
               yesterday === this.$moment(date).format('DD.MM.YY') ? "Вчера" :
               this.$moment(date).format('DD.MM.YY')
      },
    },
    mounted() {
      return this.$api.get('/transactions/page/1')
        .then(response => {
          const groups = response.data.result.reduce((groups, transaction) => {
            const date = transaction.created_at.split('T')[0];
            if (!groups[date]) {
              groups[date] = [];
            }
            groups[date].push(transaction);
            return groups;
          }, {});

          this.transactions = Object.keys(groups).map((date) => {
            return {
              date,
              transactions: groups[date]
            };
          });

          this.transactions[0].date = '2020-08-05';
          this.transactions[1].date = '2020-08-04';
         this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        })
    }
  }
</script>

<style>
    #report {
        margin: 40px 0;
    }
    #report div > div:not .loader {
        padding: 0 10px;
        text-align: left;
        color: #848497;
    }
</style>
