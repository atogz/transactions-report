<template>
    <main id="report">
        <div v-if="loading">
            <Loader/>
        </div>
        <div v-if="!loading && transactions.length">
            <div v-for="(day, index) in transactions" :key="index">
                <div> {{ day.date }}</div>
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
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        })
    }
  }
</script>

<style scoped>
</style>
