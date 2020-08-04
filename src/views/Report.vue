<template>
    <main id="report">
        <div v-if="loading">
            <Loader/>
        </div>
        <div v-if="!loading && transactions.length">
            <ul>
                <li v-for="(transaction, index) in transactions" :key="index">
                    <Transaction :transactionData="transaction"/>
                </li>
            </ul>
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
          console.log(response);
          this.transactions = response.data.result;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>

<style scoped>
</style>
