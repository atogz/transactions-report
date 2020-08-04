<template>
    <details>
        <summary>
            <div class="order">{{ transactionData.type | operationName }}: <b>{{ transactionData.event_id }}</b></div>
            <div class="time"><time datetime="2019-04-18T16:45">16:45</time></div>
            <div class="account">
                {{ transactionData.account_number }}
            </div>
            <div class="amount rubles positive">{{ transactionData.amount }}</div>
        </summary>
        <p class="description">{{ transactionData.description ? transactionData.description : "Нет описания операции" }}</p>
    </details>
</template>

<script>
  export default {
    name: "Transaction",
    props: {
      transactionData: Object
    },
    filters: {
      operationName: type => {
        return type == "PURCHASE" ? "Заказ" :
               type == "PURCHASE_BILL" ? "Счет" :
               type == "REFUND" ? "Возврат" :
               ""
      }
    },
  }
</script>

<style scoped>

</style>
