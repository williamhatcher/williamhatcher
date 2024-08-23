<template>
  <div class="text-gray-700 print:hidden text-center">
    <span v-if="isProduction" class="mr-2">
      Last deployed on {{ deployedTimestamp }} for commit
      <a :href="commitLink">{{ commitSha }}</a>
    </span>
    <span v-else class="mr-2">Running locally</span>
    <img
      class="inline h-5 -mt-1"
      :src="pipelineStatusUrl"
      alt="GitHub build status"
    />
    <a
      href="https://github.com/williamhatcher/williamhatcher"
      class="inline-flex items-center"
    >
      View the source on GitHub
      <Icon class="ml-1" type="github" />
    </a>
  </div>
</template>

<script>
import moment from 'moment';
import Icon from './utility/Icon';

export default {
  components: { Icon },
  data: () => ({
    pipelineStatusUrl: '',
  }),
  created() {
    this.isProduction = process.env.isProduction;
    this.deployedTimestamp = moment(process.env.gitlabCi.timestamp)
      .utc()
      .format('Y/MM/DD \\a\\t HH:mm:ss z');
    this.commitSha = process.env.gitlabCi.commitSha;
    this.commitLink = `${process.env.gitlabCi.projectUrl}/commit/${this.commitSha}`;

    this.timeout = setInterval(this.refreshPipelineStatus, 5000);
    this.refreshPipelineStatus();
  },
  beforeUnmount() {
    clearInterval(this.timeout);
  },
  methods: {
    refreshPipelineStatus() {
      this.pipelineStatusUrl = "https://img.shields.io/github/actions/workflow/status/williamhatcher/williamhatcher/pages.yml"
    },
  },
};
</script>
